import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dates } from 'app/core/utils/dates';
// import { LoansService } from 'app/loans/loans.service';
import { SettingsService } from 'app/settings/settings.service';
import { LoansService } from '@fineract/client';

@Component({
  selector: 'mifosx-loans-account-schedule-step',
  templateUrl: './loans-account-schedule-step.component.html',
  styleUrls: ['./loans-account-schedule-step.component.scss']
})
export class LoansAccountScheduleStepComponent implements OnInit {

  /** Currency Code */
  @Input() currencyCode: string;
  /** Loans Account Template */
  @Input() loansAccountTemplate: any;
  /** Loans Account Product Template */
  @Input() loansAccountProductTemplate: any;
  /** Loans Account Data */
  @Input() loansAccount: any;

  showRepayment = false;
  repaymentScheduleDetails: any = {periods: []};

  loanId: any = null;

  constructor(private loansService: LoansService,
    private settingsService: SettingsService,
    private route: ActivatedRoute,
    private dateUtils: Dates) {
      this.loanId = this.route.snapshot.params['loanId'];
  }

  ngOnInit(): void { }

  buildLoanRequestPayload(loansAccount: any, loansAccountTemplate: any, calendarOptions: any, locale: string, dateFormat: string): any {
    const loansAccountData = {
      ...loansAccount,
      charges: loansAccount.charges.map((charge: any) => ({
        chargeId: charge.id,
        amount: charge.amount,
        dueDate: charge.dueDate && this.dateUtils.formatDate(charge.dueDate, dateFormat),
      })),
      collateral: loansAccount.collateral.map((collateralEle: any) => ({
        clientCollateralId: collateralEle.type.collateralId,
        quantity: collateralEle.value,
      })),
      disbursementData: loansAccount.disbursementData.map((item: any) => ({
        expectedDisbursementDate: this.dateUtils.formatDate(item.expectedDisbursementDate, dateFormat),
        principal: item.principal
      })),
      interestChargedFromDate: this.dateUtils.formatDate(loansAccount.interestChargedFromDate, dateFormat),
      repaymentsStartingFromDate: this.dateUtils.formatDate(loansAccount.repaymentsStartingFromDate, dateFormat),
      submittedOnDate: this.dateUtils.formatDate(loansAccount.submittedOnDate, dateFormat),
      expectedDisbursementDate: this.dateUtils.formatDate(loansAccount.expectedDisbursementDate, dateFormat),
      dateFormat,
      locale,
    };
    if (loansAccountTemplate.clientId) {
      loansAccountData.clientId = loansAccountTemplate.clientId;
      loansAccountData.loanType = 'individual';
    } else {
      loansAccountData.groupId = loansAccountTemplate.group.id;
      loansAccountData.loanType = 'group';
    }

    if (loansAccountData.syncRepaymentsWithMeeting) {
      loansAccountData.calendarId = calendarOptions[0].id;
      delete loansAccountData.syncRepaymentsWithMeeting;
    }

    if (loansAccountData.recalculationRestFrequencyDate) {
      loansAccountData.recalculationRestFrequencyDate = this.dateUtils.formatDate(loansAccount.recalculationRestFrequencyDate, dateFormat);
    }

    if (loansAccountData.interestCalculationPeriodType === 0) {
      loansAccountData.allowPartialPeriodInterestCalcualtion = false;
    }
    if (!(loansAccountData.isFloatingInterestRate === false)) {
      delete loansAccountData.isFloatingInterestRate;
    }
    if (!(loansAccountData.multiDisburseLoan)) {
      delete loansAccountData.disbursementData;
    }
    delete loansAccountData.isValid;
    loansAccountData.principal = loansAccountData.principalAmount;
    delete loansAccountData.principalAmount;

    return loansAccountData;
  }

  showRepaymentInfo(): void {
    this.repaymentScheduleDetails = {periods: []};
    this.showRepayment = !this.showRepayment;
    if (this.showRepayment) {
      const locale = this.settingsService.language.code;
      const dateFormat = this.settingsService.dateFormat;
      const payload = this.buildLoanRequestPayload(this.loansAccount, this.loansAccountTemplate,
        this.loansAccountProductTemplate.calendarOptions, locale, dateFormat);

      this.loansService.calculateLoanScheduleOrSubmitLoanApplication(payload).subscribe((response: any) => {
        this.repaymentScheduleDetails = response;
      });
    }
  }
}

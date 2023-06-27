/** Angular Imports */
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/** Custom Services */
// import { LoanService } from '../loans.service';
import { SettingsService } from 'app/settings/settings.service';
import { ClientsService } from 'app/clients/clients.service';
import { ClientCollateralManagementService, LoansService } from '@fineract/client';

/** Step Components */
import { LoansAccountDetailsStepComponent } from '../loans-account-stepper/loans-account-details-step/loans-account-details-step.component';
import { LoansAccountTermsStepComponent } from '../loans-account-stepper/loans-account-terms-step/loans-account-terms-step.component';
import { LoansAccountChargesStepComponent } from '../loans-account-stepper/loans-account-charges-step/loans-account-charges-step.component';
import { LoansAccountDatatableStepComponent } from '../loans-account-stepper/loans-account-datatable-step/loans-account-datatable-step.component';
import { Dates } from 'app/core/utils/dates';

/**
 * Create loans account
 */
@Component({
  selector: 'mifosx-create-loans-account',
  templateUrl: './create-loans-account.component.html',
  styleUrls: ['./create-loans-account.component.scss']
})
export class CreateLoansAccountComponent implements OnInit {

  /** Imports all the step component */
  @ViewChild(LoansAccountDetailsStepComponent, { static: true }) loansAccountDetailsStep: LoansAccountDetailsStepComponent;
  @ViewChild(LoansAccountTermsStepComponent, { static: true }) loansAccountTermsStep: LoansAccountTermsStepComponent;
  @ViewChild(LoansAccountChargesStepComponent, { static: true }) loansAccountChargesStep: LoansAccountChargesStepComponent;
  /** Get handle on dtloan tags in the template */
  @ViewChildren('dtloan') loanDatatables: QueryList<LoansAccountDatatableStepComponent>;

  /** Loans Account Template */
  loansAccountTemplate: any;
  /** Loans Account Product Template */
  loansAccountProductTemplate: any;
  /** Collateral Options */
  collateralOptions: any;
  /** Multi Disburse Loan */
  multiDisburseLoan: any;
  /** Principal Amount */
  principal: any;
  datatables: any = [];
  /** Currency Code */
  currencyCode: string;

  /**
   * Sets loans account create form.
   * @param {route} ActivatedRoute Activated Route.
   * @param {router} Router Router.
   * @param {loansService} LoansService Loans Service
   * @param {SettingsService} settingsService Settings Service
   * @param {ClientsService} clientService Client Service
   */
  constructor(private route: ActivatedRoute,
    private router: Router,
    private loansService: LoansService,
    // private customLoanService:LoanService,
    private settingsService: SettingsService,
    private clientService: ClientCollateralManagementService,
    private dateUtils: Dates
  ) {
    this.route.data.subscribe((data: { loansAccountTemplate: any }) => {
      this.loansAccountTemplate = data.loansAccountTemplate;
    });
  }

  ngOnInit() {
  }

  /**
   * Sets loans account product template and collateral template
   * @param {any} $event API response
   */
  setTemplate($event: any) {
    this.loansAccountProductTemplate = $event;
    this.currencyCode = this.loansAccountProductTemplate.currency.code;
    const clientId = this.loansAccountTemplate.clientId;
    this.clientService.getClientCollateralTemplate(clientId).subscribe((response: any) => {
      this.collateralOptions = response;
    });
    const entityId = (this.loansAccountTemplate.clientId) ? this.loansAccountTemplate.clientId : this.loansAccountTemplate.group.id;
    const isGroup = (this.loansAccountTemplate.clientId) ? false : true;
    const productId = this.loansAccountProductTemplate.loanProductId;
    if (isGroup) {
      this.loansService.template10(null, entityId, productId, 'group', true, true).subscribe((response: any) => {
        this.multiDisburseLoan = response.multiDisburseLoan;
      });
    }
    else {
      this.loansService.template10(entityId, null, productId, 'individual', true, true).subscribe((response: any) => {
        this.multiDisburseLoan = response.multiDisburseLoan;
      });
    }

    this.setDatatables();
  }

  setDatatables(): void {
    this.datatables = [];

    if (this.loansAccountProductTemplate.datatables) {
      this.loansAccountProductTemplate.datatables.forEach((datatable: any) => {
        this.datatables.push(datatable);
      });
    }
  }

  /** Get Loans Account Details Form Data */
  get loansAccountDetailsForm() {
    return this.loansAccountDetailsStep.loansAccountDetailsForm;
  }

  /** Get Loans Account Terms Form Data */
  get loansAccountTermsForm() {
    return this.loansAccountTermsStep.loansAccountTermsForm;
  }

  /** Checks wheter all the forms in different steps are valid or not */
  get loansAccountFormValid() {
    return (
      this.loansAccountDetailsForm.valid &&
      this.loansAccountTermsForm.valid
    );
  }

  /** Gets principal Amount */
  get loanPrincipal() {
    return this.loansAccountTermsStep.loansAccountTermsForm.value.principal;
  }

  /** Retrieves Data of all forms except Currency to submit the data */
  get loansAccount() {
    return {
      ...this.loansAccountDetailsStep.loansAccountDetails,
      ...this.loansAccountTermsStep.loansAccountTerms,
      ...this.loansAccountChargesStep.loansAccountCharges,
      ...this.loansAccountTermsStep.loanCollateral,
      ...this.loansAccountTermsStep.disbursementData
    };
  }

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

  /**
   * Submits Data to create loan account
   */
  submit() {
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const payload = this.buildLoanRequestPayload(this.loansAccount, this.loansAccountTemplate,
      this.loansAccountProductTemplate.calendarOptions, locale, dateFormat);

    if (this.loansAccountProductTemplate.datatables && this.loansAccountProductTemplate.datatables.length > 0) {
      const datatables: any[] = [];
      this.loanDatatables.forEach((loanDatatable: LoansAccountDatatableStepComponent) => {
        datatables.push(loanDatatable.payload);
      });
      payload['datatables'] = datatables;
    }

    this.loansService.calculateLoanScheduleOrSubmitLoanApplication(payload).subscribe((response: any) => {
      this.router.navigate(['../', response.resourceId, 'general'], { relativeTo: this.route });
    });
  }

}

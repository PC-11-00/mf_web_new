/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { LoansService } from '../loans.service';
import { GuarantorsService, LoanChargesService, LoanCollateralService, LoanTransactionsService, LoansService, RescheduleLoansService, UserGeneratedDocumentsService } from '@fineract/client';
import { SettingsService } from 'app/settings/settings.service';
import { Dates } from 'app/core/utils/dates';
/**
 * Loans notes data resolver.
 */
@Injectable()
export class LoanActionButtonResolver implements Resolve<Object> {

  /**
   * @param {LoansService} LoansService Loans service.
   */
  constructor(private loansService: LoansService,
    private loanTransactionsService: LoanTransactionsService,
    private rescheduleLoansService: RescheduleLoansService,
    private loanCollateralService:LoanCollateralService,
    private guarantorsService:GuarantorsService,
    private userGeneratedDocumentsService:UserGeneratedDocumentsService,
    private loanChargesService:LoanChargesService,
    private settingsService: SettingsService,
    private dateUtils: Dates) { }

  /**
   * Returns the Loans Notes Data.
   * @returns {Observable<any>}
   */
  loanId: any;
  transactionDate: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.loanId = route.paramMap.get('loanId') || route.parent.paramMap.get('loanId');
    const loanActionButton = route.paramMap.get('action');
    if (loanActionButton === 'Assign Loan Officer' || loanActionButton === 'Change Loan Officer') {
      return this.loansService.retrieveLoan(this.loanId, true, null, null, 'id,loanOfficerId,loanOfficerOptions');
    } else if (loanActionButton === 'Make Repayment') {
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId, 'repayment');
    } else if (loanActionButton === 'Goodwill Credit') {
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId, 'goodwillCredit');
    } else if (loanActionButton === 'Payout Refund') {
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId, 'payoutRefund');
    } else if (loanActionButton === 'Merchant Issued Refund') {
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId, 'merchantIssuedRefund');
    } else if (loanActionButton === 'Credit Balance Refund') {
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId, 'creditBalanceRefund');
    } else if (loanActionButton === 'Waive Interest') {
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId, 'waiveinterest');
    } else if (loanActionButton === 'Write Off') {
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId, 'writeoff');
    } else if (loanActionButton === 'Close') {
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId, 'close');
    } else if (loanActionButton === 'Close (as Rescheduled)') {
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId, 'close-rescheduled');
    } else if (loanActionButton === 'Reschedule') {
      return this.rescheduleLoansService.retrieveTemplate10();
    } else if (loanActionButton === 'Prepay Loan') {
      this.transactionDate = this.dateUtils.formatDate(this.settingsService.businessDate, this.settingsService.dateFormat);
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId, 'prepayLoan', this.settingsService.dateFormat, this.transactionDate,this.settingsService.language.code);
    } else if (loanActionButton === 'Add Collateral') {
      return this.loanCollateralService.newCollateralTemplate(this.loanId);
    } else if (loanActionButton === 'Disburse to Savings') {
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId, 'disburseToSavings');
    } else if (loanActionButton === 'Recovery Payment') {
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId, 'recoverypayment');
    } else if (loanActionButton === 'View Guarantors') {
      return this.loansService.retrieveLoan(this.loanId,null,'guarantors');
    } else if (loanActionButton === 'Create Guarantor') {
      return this.guarantorsService.newGuarantorTemplate(this.loanId);
    } else if (loanActionButton === 'Disburse') {
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId, 'disburse');
    } else if (loanActionButton === 'Loan Screen Reports') {
      return this.userGeneratedDocumentsService.retrieveAll40(0,1);
    } else if (loanActionButton === 'Approve') {
      return this.loansService.retrieveApprovalTemplate(this.loanId,'approval');
    } else if (loanActionButton === 'Add Loan Charge') {
      return this.loanChargesService.retrieveTemplate8(this.loanId);
    } else if (loanActionButton === 'Foreclosure') {
      this.transactionDate = this.dateUtils.formatDate(this.settingsService.businessDate, this.settingsService.dateFormat);
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId,'foreclosure',this.settingsService.dateFormat,this.transactionDate,this.settingsService.language.code);
    } else if (loanActionButton === 'Charge-Off') {
      return this.loanTransactionsService.retrieveTransactionTemplate(this.loanId, 'charge-off');
    } else {
      return undefined;
    }
  }

}

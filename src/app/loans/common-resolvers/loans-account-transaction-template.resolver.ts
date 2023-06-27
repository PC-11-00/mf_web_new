/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { LoansService } from '../loans.service';
import { LoanTransactionsService } from '@fineract/client';

/**
 * Loans Account Transaction Template data resolver.
 */
@Injectable()
export class LoansAccountTransactionTemplateResolver implements Resolve<Object> {

  /**
   * @param {LoansService} LoansService Loans service.
   */
  constructor(private loansService: LoanTransactionsService) { }

  /**
   * Returns the Loans Account Transaction Template data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  loanId:any;
  transactionId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.loanId = route.paramMap.get('loanId');
    this.transactionId = route.paramMap.get('id');
    return this.loansService.retrieveTransaction(this.loanId, this.transactionId);
  }

}

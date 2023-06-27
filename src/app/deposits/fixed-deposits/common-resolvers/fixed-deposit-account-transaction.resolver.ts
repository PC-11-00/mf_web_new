/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { FixedDepositsService } from '../fixed-deposits.service';
import { FixedDepositAccountTransactionsService } from '@fineract/client';

/**
 * Fixed Deposits Account Transaction data resolver.
 */
@Injectable()
export class FixedDepositsAccountTransactionResolver implements Resolve<Object> {

  /**
   * @param {FixedDepositsService} fixedDepositsService Savings service.
   */
  constructor(private fixedDepositsService: FixedDepositAccountTransactionsService) { }

  /**
   * Returns the Fixed Deposits Account Transaction data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  
  fixedDepositAccountId:any;
  transactionId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.fixedDepositAccountId = route.parent.paramMap.get('fixedDepositAccountId');
    this.transactionId = route.paramMap.get('id');
    return this.fixedDepositsService.retrieveOne18(this.fixedDepositAccountId, this.transactionId);
  }

}

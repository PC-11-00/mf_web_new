/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SavingsService } from '../savings.service';
import { SavingsAccountTransactionsService } from '@fineract/client';

/**
 * Savings Account Transaction Template data resolver.
 */
@Injectable()
export class SavingsAccountTransactionTemplateResolver implements Resolve<Object> {

  /**
   * @param {SavingsService} SavingsService Savings service.
   */
  constructor(private savingsAccountTransactionsService: SavingsAccountTransactionsService) { }

  /**
   * Returns the Savings Account Transaction Template data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  savingAccountId: any;
  transactionId: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.savingAccountId = route.parent.paramMap.get('savingAccountId');
    this.transactionId = route.paramMap.get('id');
    return this.savingsAccountTransactionsService.retrieveOne24(this.savingAccountId, this.transactionId);
  }

}

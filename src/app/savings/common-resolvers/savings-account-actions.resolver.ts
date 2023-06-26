/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable, forkJoin } from 'rxjs';

/** Custom Services */
import { SavingsService } from '../savings.service';
import { SavingsAccountService, SavingsAccountTransactionsService, SavingsChargesService } from 'openapi/typescript_files';

/**
 * Savings Account Actions data resolver.
 */
@Injectable()
export class SavingsAccountActionsResolver implements Resolve<Object> {

  /**
   * @param {SavingsService} SavingsService Savings service.
   */
  constructor(private savingsAccountService: SavingsAccountService,
    private savingsChargesService: SavingsChargesService,
    private savingsAccountTransactionsService: SavingsAccountTransactionsService) { }

  /**
   * Returns the Savings account actions data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  savingAccountId: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const actionName = route.paramMap.get('name');
    this.savingAccountId = route.paramMap.get('savingAccountId') || route.parent.parent.paramMap.get('savingAccountId');
    switch (actionName) {
      case 'Assign Staff':
        return this.savingsAccountService.retrieveOne25(this.savingAccountId);
      case 'Add Charge':
        return this.savingsChargesService.retrieveTemplate18(this.savingAccountId);
      case 'Withdrawal':
      case 'Deposit':
        return this.savingsAccountTransactionsService.retrieveTemplate19(this.savingAccountId);
      case 'Close':
        return forkJoin([
          this.savingsAccountTransactionsService.retrieveTemplate19(this.savingAccountId),
          this.savingsAccountService.retrieveOne25(this.savingAccountId)
        ]);
      case 'Apply Annual Fees':
        return this.savingsAccountService.retrieveOne25(this.savingAccountId);
      default:
        return undefined;
    }
  }

}

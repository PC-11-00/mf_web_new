/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SavingsService } from 'app/savings/savings.service';
import { RecurringDepositsService } from '../recurring-deposits.service';
import { RecurringDepositAccountService, SavingsChargesService } from '@fineract/client';

/**
 * Recurring Deposits Account Actions data resolver.
 */
@Injectable()
export class RecurringDepositsAccountActionsResolver implements Resolve<Object> {

  /**
   * @param {SavingsService} SavingsService Savings service.
   * @param {RecurringDepositsService} recurringDepositsService Recurring Deposits Service.
   */
  constructor(private savingsService: SavingsChargesService,
    private recurringDepositsService: RecurringDepositAccountService) { }

  /**
   * Returns the Recurring deposits account actions data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  recurringDepositAccountId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const actionName = route.paramMap.get('name');
    this.recurringDepositAccountId = route.paramMap.get('recurringDepositAccountId') || route.parent.parent.paramMap.get('recurringDepositAccountId');
    switch (actionName) {
      case 'Add Charge':
        return this.savingsService.retrieveTemplate18(this.recurringDepositAccountId);
      case 'Close':
        return this.recurringDepositsService.accountClosureTemplate1(this.recurringDepositAccountId, 'close');
      case 'Deposit':
        return this.recurringDepositsService.accountClosureTemplate1(this.recurringDepositAccountId, 'deposit');
      default:
        return undefined;
    }
  }

}

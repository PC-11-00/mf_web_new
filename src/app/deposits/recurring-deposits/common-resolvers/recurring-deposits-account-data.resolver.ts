/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { RecurringDepositsService } from '../recurring-deposits.service';
import { RecurringDepositAccountService } from 'openapi/typescript_files';

/**
 * RecurringDeposits Account data resolver.
 */
@Injectable()
export class RecurringDepositsAccountDataResolver implements Resolve<Object> {

  /**
   * @param {RecurringDepositsService} RecurringDepositsService RecurringDeposits service.
   */
  constructor(private recurringDepositsService: RecurringDepositAccountService) { }

  /**
   * Returns the RecurringDeposits Account data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  recurringDepositAccountId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.recurringDepositAccountId = route.parent.paramMap.get('recurringDepositAccountId');
    return this.recurringDepositsService.retrieveOne22(this.recurringDepositAccountId);
  }

}

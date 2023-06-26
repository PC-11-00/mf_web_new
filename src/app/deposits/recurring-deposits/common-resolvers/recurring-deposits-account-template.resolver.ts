/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { RecurringDepositsService } from '../recurring-deposits.service';
import { RecurringDepositAccountService } from 'openapi/typescript_files';

/**
 * Savings Account Template resolver.
 */
@Injectable()
export class RecurringDepositsAccountTemplateResolver implements Resolve<Object> {

  /**
   * @param {recurringDepositsService} RecurringDepositsService Savings service.
   */
  constructor(private recurringDepositsService: RecurringDepositAccountService) { }

  /**
   * Returns the Shares Account Template.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  clientId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.clientId = route.parent.parent.paramMap.get('clientId');
    return this.recurringDepositsService.template13(this.clientId);
  }

}

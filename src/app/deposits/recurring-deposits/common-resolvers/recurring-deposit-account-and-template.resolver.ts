/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { RecurringDepositsService } from '../recurring-deposits.service';
import { RecurringDepositAccountService } from 'openapi/typescript_files';

/**
 * Recurring Deposits Account Template resolver.
 */
@Injectable()
export class RecurringDepositsAccountAndTemplateResolver implements Resolve<Object> {

    /**
     * @param {RecurringDepositsService} recurringDepositsService Recurring Deposits service.
     */
    constructor(private recurringDepositsService: RecurringDepositAccountService) { }

    /**
     * Returns the Recurring Deposits Account Template.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    recurringDepositAccountId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.recurringDepositAccountId = route.paramMap.get('recurringDepositAccountId');
        return this.recurringDepositsService.retrieveOne22(this.recurringDepositAccountId);
    }

}

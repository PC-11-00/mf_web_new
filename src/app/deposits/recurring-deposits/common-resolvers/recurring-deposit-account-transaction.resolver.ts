/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { RecurringDepositsService } from '../recurring-deposits.service';
import { RecurringDepositAccountTransactionsService } from '@fineract/client';

/**
 * Recurring Deposits Account Transaction data resolver.
 */
@Injectable()
export class RecurringDepositsAccountTransactionResolver implements Resolve<Object> {

    /**
     * @param {RecurringDepositsService} recurringDepositsService Recurring Deposits service.
     */
    constructor(private recurringDepositsService: RecurringDepositAccountTransactionsService) { }

    /**
     * Returns the Recurring Deposits Account Transaction data.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    recurringDepositAccountId:any;
    transactionId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.recurringDepositAccountId = route.parent.paramMap.get('recurringDepositAccountId');
        this.transactionId = route.paramMap.get('id');
        return this.recurringDepositsService.retrieveOne21(this.recurringDepositAccountId, this.transactionId);
    }

}

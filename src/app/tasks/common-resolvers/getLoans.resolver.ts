/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { TasksService } from '../tasks.service';
import { LoansService } from '@fineract/client';

/**
 * Loans data resolver.
 */
@Injectable()
export class GetLoans implements Resolve<Object> {

    /**
     * @param {TasksService} tasksService Tasks service.
     */
    constructor(private loansService: LoansService) { }

    /**
     * Returns all the loans data.
     * @returns {Observable<any>}
     */
    resolve(): Observable<any> {
        return this.loansService.retrieveAll27('l.loan_status_id in (100,200)',undefined,undefined,1000);
    }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { LoansService } from '../loans.service';
import { LoansService } from '@fineract/client';
/**
 * Clients data resolver.
 */
@Injectable()
export class LoanDetailsChargesResolver implements Resolve<Object> {

    /**
     * @param {LoansService} LoansService Loans service.
     */
    constructor(private loansService: LoansService) { }

    /**
     * Returns the Loans with Association data.
     * @returns {Observable<any>}
     */
    loanId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.loanId = route.paramMap.get('loanId');
        return this.loansService.retrieveLoan(this.loanId,null,'all','guarantors,futureSchedule');
    }

}

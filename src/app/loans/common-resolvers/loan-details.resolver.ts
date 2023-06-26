/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { LoansService } from '../loans.service';
import { LoansService } from 'openapi/typescript_files';
/**
 * Clients data resolver.
 */
@Injectable()
export class LoanDetailsResolver implements Resolve<Object> {

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
      this.loanId = route.paramMap.get('loanId') || route.parent.paramMap.get('loanId');
      return this.loansService.retrieveLoan(this.loanId,null,'all','guarantors,futureSchedule');
    }

}

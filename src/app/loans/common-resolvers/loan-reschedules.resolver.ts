import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
// import { LoansService } from '../loans.service';
import { RescheduleLoansService } from '@fineract/client';

@Injectable({
  providedIn: 'root'
})
export class LoanReschedulesResolver implements Resolve<boolean> {

    /**
     * @param {LoansService} LoansService Loans service.
     */
    constructor(private rescheduleLoansService: RescheduleLoansService) { }

    /**
     * Returns the Loans data.
     * @returns {Observable<any>}
     */
    loanId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
      this.loanId = route.paramMap.get('loanId') || route.parent.paramMap.get('loanId');
      return this.rescheduleLoansService.readLoanRescheduleRequest(this.loanId);
    }

}

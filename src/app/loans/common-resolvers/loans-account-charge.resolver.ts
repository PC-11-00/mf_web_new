/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { LoansService } from '../loans.service';
import { LoanChargesService } from '@fineract/client';

/**
 * Loans Account Charge data resolver.
 */
@Injectable()
export class LoansAccountChargeResolver implements Resolve<Object> {

    /**
     * @param {LoansService} LoansService Loans service.
     */
    constructor(private loanChargesService: LoanChargesService) { }

    /**
     * Returns the Loans Account Charge data.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    loanId:any;
    chargeId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
      this.loanId = route.paramMap.get('loanId');
      this.chargeId = route.paramMap.get('id');
      return this.loanChargesService.retrieveLoanCharge(this.loanId, this.chargeId);
    }

}

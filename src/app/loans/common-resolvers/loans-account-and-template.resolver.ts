/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { LoansService } from '../loans.service';
import { LoansService } from '@fineract/client';
/**
 * Loan accounts template data resolver.
 */
@Injectable()
export class LoansAccountAndTemplateResolver implements Resolve<Object> {
    /**
     * @param {ProductsService} productsService Products service.
     */
    constructor(private loansService: LoansService) { }

    /**
     * Returns the loan account template data.
     * @returns {Observable<any>}
     */
    loanId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
      this.loanId = route.paramMap.get('loanId') || route.parent.paramMap.get('loanId');
      return this.loansService.retrieveLoan(this.loanId);
    }
}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { LoansService } from '../loans.service';
import { DataTablesService } from '@fineract/client';

/**
 * Loans notes data resolver.
 */
@Injectable()
export class LoanDatatableResolver implements Resolve<Object> {

    /**
     * @param {LoansService} LoansService Loans service.
     */
    constructor(private dataTablesService: DataTablesService) { }

    /**
     * Returns the Loans Notes Data.
     * @returns {Observable<any>}
     */
    loanId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
      this.loanId = route.paramMap.get('loanId') || route.parent.parent.paramMap.get('loanId');
      const datatableName = route.paramMap.get('datatableName');
      return this.dataTablesService.getDatatable1( datatableName,this.loanId);
    }

}

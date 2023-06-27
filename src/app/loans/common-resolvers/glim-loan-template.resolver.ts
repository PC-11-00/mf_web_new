/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { LoansService } from '../loans.service';
import { LoansService } from '@fineract/client';
/**
 * GLIM Loan template data resolver.
 */
@Injectable()
export class GLIMLoanTemplateResolver implements Resolve<Object> {
    /**
     * @param {ProductsService} loansService Loan service.
     */
    constructor(private loansService: LoansService) { }

    /**
     * Returns the loan account template data.
     * @returns {Observable<any>}
     */
    groupId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.groupId = route.paramMap.get('groupId');
        return this.loansService.template10(null,this.groupId,null,'jlgbulk');
    }
}

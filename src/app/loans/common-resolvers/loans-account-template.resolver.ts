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
export class LoansAccountTemplateResolver implements Resolve<Object> {
    /**
     * @param {ProductsService} productsService Products service.
     */
    constructor(private loansService: LoansService) { }

    /**
     * Returns the loan account template data.
     * @returns {Observable<any>}
     */
    entityId: any;
    isGroup: any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.entityId = route.parent.parent.paramMap.get('clientId') || route.parent.parent.paramMap.get('groupId');
        this.isGroup = (route.parent.parent.paramMap.get('groupId')) ? true : false;
        if (this.isGroup) {
            return this.loansService.template10(null, this.entityId, null, 'group', true, true);
        }
        else {
            return this.loansService.template10(this.entityId, null, null, 'individual', true, true);
        }
    }
}

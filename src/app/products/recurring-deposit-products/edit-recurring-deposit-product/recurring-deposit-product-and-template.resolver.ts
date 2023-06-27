/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../../products.service';
import { RecurringDepositProductService } from '@fineract/client';

/**
 * Recurring Deposits Account Template resolver.
 */
@Injectable()
export class RecurringDepositProductAndTemplateResolver implements Resolve<Object> {

    /**
     * @param {ProductsService} productsService Products service.
     */
    constructor(private recurringDepositProductService: RecurringDepositProductService) { }

    /**
     * Returns the Recurring Deposits Product and Template.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    productId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
      this.productId = route.parent.paramMap.get('productId');
      return this.recurringDepositProductService.retrieveOne23(this.productId);
    }

}

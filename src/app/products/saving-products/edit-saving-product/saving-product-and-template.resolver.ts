/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../../products.service';
import { SavingsProductService } from '@fineract/client';

/**
 * Saving product and template data resolver.
 */
@Injectable()
export class SavingProductAndTemplateResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private savingsProductService: SavingsProductService) {}

  /**
   * Returns the saving product and template data.
   * @returns {Observable<any>}
   */

  productId : any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.productId = route.paramMap.get('productId');
    return this.savingsProductService.retrieveOne26(this.productId);
  }

}

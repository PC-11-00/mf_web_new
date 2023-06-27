/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { SavingsProductService } from '@fineract/client';

/**
 * Saving Product data resolver.
 */
@Injectable()
export class SavingProductResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private savingsProductService: SavingsProductService) {}

  /**
   * Returns the saving product data.
   * @returns {Observable<any>}
   */
  productId: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
     this.productId = route.parent.paramMap.get('productId');
    return this.savingsProductService.retrieveOne26(this.productId);
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { FixedDepositProductService } from '@fineract/client';

/**
 * Fixed Deposit Product data resolver.
 */
@Injectable()
export class FixedDepositProductResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private fixedDepositProductService: FixedDepositProductService) { }

  /**
   * Returns the fixed deposit product data.
   * @returns {Observable<any>}
   */
  productId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.productId = route.parent.paramMap.get('productId');
    return this.fixedDepositProductService.retrieveOne20(this.productId);
  }

}

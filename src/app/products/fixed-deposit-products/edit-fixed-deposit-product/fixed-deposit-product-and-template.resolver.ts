/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../../products.service';
import { FixedDepositProductService } from '@fineract/client';

/**
 * Fixed Deposits Account Template resolver.
 */
@Injectable()
export class FixedDepositProductAndTemplateResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private productsService: FixedDepositProductService) { }

  /**
   * Returns the Fixed Deposits Product and Template.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  productId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.productId = route.parent.paramMap.get('productId');
    return this.productsService.retrieveOne20(this.productId);
  }

}

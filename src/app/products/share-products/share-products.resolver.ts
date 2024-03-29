/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductsService } from '@fineract/client';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { ProductsService } from '../products.service';

/**
 * Share products data resolver.
 */
@Injectable()
export class ShareProductsResolver implements Resolve<Object> {

  /**
   *
   * @param {ProductsService} productsService Products service.
   */
  constructor(private productsService: ProductsService) {}

  /**
   * Returns the share products data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.productsService.retrieveAllProducts('share');
  }

}

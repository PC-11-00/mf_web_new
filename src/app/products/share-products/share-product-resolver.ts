/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProductsService } from 'openapi/typescript_files';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { ProductsService } from '../products.service';

/**
 * Share Product data resolver.
 */
@Injectable()
export class ShareProductResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private productsService: ProductsService) {}

  /**
   * Returns the share product data.
   * @returns {Observable<any>}
   */
  productId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.productId = route.parent.paramMap.get('productId');
    return this.productsService.retrieveProduct(this.productId,'share');
  }

}

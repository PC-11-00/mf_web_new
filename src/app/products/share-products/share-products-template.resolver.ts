/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductsService } from '@fineract/client';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { ProductsService } from '../products.service';

@Injectable()
export class ShareProductsTemplateResolver implements Resolve<Object> {

  constructor(private productsService: ProductsService) {}

  /**
   * Returns the share products template data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.productsService.retrieveTemplate13('share');
  }

}

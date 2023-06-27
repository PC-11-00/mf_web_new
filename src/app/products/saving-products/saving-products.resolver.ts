/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { SavingsProductService } from 'openapi/typescript_files';

/**
 * Saving products data resolver.
 */
@Injectable()
export class SavingProductsResolver implements Resolve<Object> {

  /**
   *
   * @param {ProductsService} productsService Products service.
   */
  constructor(private savingsProductService: SavingsProductService) {}

  /**
   * Returns the saving products data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.savingsProductService.retrieveAll34();
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { FixedDepositProductService } from 'openapi/typescript_files';

/**
 * Fixed Deposit Products data resolver.
 */
@Injectable()
export class FixedDepositProductsResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private productsService: FixedDepositProductService) {}

  /**
   * Returns the fixed deposit products data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.productsService.retrieveAll30();
  }

}

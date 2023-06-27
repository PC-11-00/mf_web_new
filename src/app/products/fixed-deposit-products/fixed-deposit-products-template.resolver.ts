/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { FixedDepositProductService } from '@fineract/client';

@Injectable()
export class FixedDepositProductsTemplateResolver implements Resolve<Object> {

  constructor(private fixedDepositProductService: FixedDepositProductService) {}

  /**
   * Returns the fixed deposit products template data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.fixedDepositProductService.retrieveTemplate15();
  }

}

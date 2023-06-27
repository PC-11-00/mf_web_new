/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { ChargesService } from '@fineract/client';

/**
 * Charges data resolver.
 */
@Injectable()
export class ChargesResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private chargesService: ChargesService) {}

  /**
   * Returns the products data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.chargesService.retrieveAllCharges();
  }

}

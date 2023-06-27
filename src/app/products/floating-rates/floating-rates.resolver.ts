/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { FloatingRatesService } from '@fineract/client';

/**
 * Floating Rates data resolver.
 */
@Injectable()
export class FloatingRatesResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private floatingRatesService: FloatingRatesService) {}

  /**
   * Returns the floating rates data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.floatingRatesService.retrieveAll22();
  }

}

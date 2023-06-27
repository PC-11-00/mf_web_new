/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { FloatingRatesService } from '@fineract/client';

/**
 * Floating Rate data resolver.
 */
@Injectable()
export class FloatingRateResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private floatingRatesService: FloatingRatesService) {}

  /**
   * Returns the floating rate data.
   * @returns {Observable<any>}
   */
  floatingRateId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.floatingRateId = route.paramMap.get('id');
    return this.floatingRatesService.retrieveOne13(this.floatingRateId);
  }

}

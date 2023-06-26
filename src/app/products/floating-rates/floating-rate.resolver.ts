/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { FloatingRatesService } from 'openapi/typescript_files';

/**
 * Floating Rate data resolver.
 */
@Injectable()
export class FloatingRateResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private productsService: FloatingRatesService) {}

  /**
   * Returns the floating rate data.
   * @returns {Observable<any>}
   */
  floatingRateId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.floatingRateId = route.paramMap.get('id');
    return this.productsService.retrieveOne13(this.floatingRateId);
  }

}

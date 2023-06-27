/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from 'app/products/products.service';
import { ChargesService } from '@fineract/client';

/**
 * Charge data resolver.
 */
@Injectable()
export class ChargeResolver implements Resolve<Object> {

  /**
   * @param {productsService} productsService Products service.
   */
  constructor(private chargesService: ChargesService) {}

  /**
   * Returns the charge data.
   * @returns {Observable<any>}
   */
  chargeId : any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.chargeId = route.paramMap.get('id');
    return this.chargesService.retrieveCharge(this.chargeId);
  }

}

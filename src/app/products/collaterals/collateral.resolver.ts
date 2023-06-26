/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { CollateralManagementService } from 'openapi/typescript_files';

/**
 * Charges data resolver.
 */
@Injectable()
export class CollateralResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private productsService: CollateralManagementService) {}

  /**
   * Returns the products data.
   * @returns {Observable<any>}
   */
  collateralId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.collateralId = route.paramMap.get('id');
    return this.productsService.getCollateral(this.collateralId);
  }

}

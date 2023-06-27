/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { RecurringDepositProductService } from 'openapi/typescript_files';

/**
 * Recurring Deposit Product data resolver.
 */
@Injectable()
export class RecurringDepositProductResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private recurringDepositProductService: RecurringDepositProductService) { }

  /**
   * Returns the recurring deposit product data.
   * @returns {Observable<any>}
   */
  productId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.productId = route.parent.paramMap.get('productId');
    return this.recurringDepositProductService.retrieveOne23(this.productId);
  }

}

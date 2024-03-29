/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { RecurringDepositProductService } from '@fineract/client';

/**
 * Recurring Deposit Products data resolver.
 */
@Injectable()
export class RecurringDepositProductsResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private recurringDepositProductService: RecurringDepositProductService) {}

  /**
   * Returns the recurring deposit products data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.recurringDepositProductService.retrieveAll32();
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { RecurringDepositProductService } from '@fineract/client';

@Injectable()
export class RecurringDepositProductsTemplateResolver implements Resolve<Object> {

  constructor(private recurringDepositProductService: RecurringDepositProductService) { }

  /**
   * Returns the recurring deposit products template data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.recurringDepositProductService.retrieveTemplate17();
  }

}

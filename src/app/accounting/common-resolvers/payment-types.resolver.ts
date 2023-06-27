/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AccountingService } from '../accounting.service';
import { PaymentTypeService } from '@fineract/client';

/**
 * Payment types data resolver.
 */
@Injectable()
export class PaymentTypesResolver implements Resolve<Object> {

  /**
   * @param {AccountingService} accountingService Accounting service.
   */
  constructor(private accountingService: PaymentTypeService) {}

  /**
   * Returns the payment types data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.accountingService.getAllPaymentTypes();
  }

}

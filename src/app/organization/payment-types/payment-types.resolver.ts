/** Angular Imports */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../organization.service';
import { PaymentTypeService } from '@fineract/client';

/**
 * Payment Types data resolver.
 */
@Injectable()
export class PaymentTypesResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private organizationService: PaymentTypeService) {}

  /**
   * Returns the payment types data.
   * @returns {Observable<any>}
   */
  paymentTypeId:any;
   resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.paymentTypeId = route.paramMap.get('id');
    if (this.paymentTypeId) {
      return this.organizationService.retrieveOnePaymentType(this.paymentTypeId);
    } else {
      return this.organizationService.getAllPaymentTypes();
    }
  }

}

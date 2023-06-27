/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from 'app/organization/organization.service';
import { TellerCashManagementService } from '@fineract/client';

/**
 * Cashier data resolver.
 */
@Injectable()
export class CashierResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private organizationService: TellerCashManagementService) {}

  /**
   * Returns the cashier data.
   * @returns {Observable<any>}
   */
  tellerId:any;
  cashierId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.cashierId = route.paramMap.get('id');
    this.tellerId = route.parent.parent.paramMap.get('id');
    return this.organizationService.findCashierData(this.tellerId, this.cashierId);
  }

}

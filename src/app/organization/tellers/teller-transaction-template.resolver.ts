/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from 'app/organization/organization.service';
import { TellerCashManagementService } from '@fineract/client';

/**
 * Cashier transaction data resolver.
 */
@Injectable()
export class CashierTransactionTemplateResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private tellerCashManagementService: TellerCashManagementService) {}

  /**
   * Returns the cashier transaction data.
   * @returns {Observable<any>}
   */
  cashierId:any;
  tellerId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.cashierId = route.parent.paramMap.get('id');
    this.tellerId = route.parent.parent.paramMap.get('id');
    return this.tellerCashManagementService.getCashierTxnTemplate(this.tellerId, this.cashierId);
  }

}

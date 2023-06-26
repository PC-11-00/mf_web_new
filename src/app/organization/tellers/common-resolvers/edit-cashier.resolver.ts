/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from 'app/organization/organization.service';
import { TellerCashManagementService } from 'openapi/typescript_files';

/**
 * Cashier Template resolver.
 */
@Injectable()
export class EditCashierResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private organizationService: TellerCashManagementService) {}

  /**
   * Returns the cashier template.
   * @returns {Observable<any>}
   */
  tellerId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.tellerId = route.parent.parent.paramMap.get('id');
    return this.organizationService.getCashierTemplate(this.tellerId);
  }

}

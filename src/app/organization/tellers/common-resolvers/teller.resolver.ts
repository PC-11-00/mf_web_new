/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from 'app/organization/organization.service';
import { TellerCashManagementService } from '@fineract/client';

/**
 * Teller data resolver.
 */
@Injectable()
export class TellerResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private organizationService: TellerCashManagementService) {}

  /**
   * Returns the teller data.
   * @returns {Observable<any>}
   */
  tellerId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.tellerId = route.paramMap.get('id');
    return this.organizationService.findTeller(this.tellerId);
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../../organization.service';
import { TellerCashManagementService } from '@fineract/client';

/**
 * Tellers data resolver.
 */
@Injectable()
export class TellersResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private organizationService: TellerCashManagementService) {}

  /**
   * Returns the Tellers data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.organizationService.getTellerData();
  }

}

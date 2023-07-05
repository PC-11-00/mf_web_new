/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../../organization.service';
import { DefaultService } from '@fineract/client';

/**
 * SMS Campaigns data resolver.
 */
@Injectable()
export class SmsCampaignsResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private defaultService: DefaultService) {}

  /**
   * Returns the SMS Campaigns data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.defaultService.retrieveAllEmails1();
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../../organization.service';
import { DefaultService } from '@fineract/client';

/**
 * SMS Campaign Template resolver.
 */
@Injectable()
export class SmsCampaignTemplateResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private defaultService: DefaultService) {}

  /**
   * Returns the SMS Campaign Template.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.defaultService.template2();
  }

}

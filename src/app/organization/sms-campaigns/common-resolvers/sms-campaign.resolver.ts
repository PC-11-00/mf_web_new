/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from 'app/organization/organization.service';
import { DefaultService } from '@fineract/client';

/**
 * SMS Campaign data resolver.
 */
@Injectable()
export class SmsCampaignResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private defaultService: DefaultService) {}

  /**
   * Returns the SMS Campaign data.
   * @returns {Observable<any>}
   */
  smsCampaignId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.smsCampaignId  = route.paramMap.get('id');
    return this.defaultService.retrieveCampaign(this.smsCampaignId);
  }

}

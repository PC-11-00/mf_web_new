/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../../organization.service';
import { ProvisioningCriteriaService } from '@fineract/client';

/**
 * Provisioning criteria and template resolver.
 */
@Injectable()
export class LoanProvisioningCriteriaAndTemplateResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Products service.
   */
  constructor(private provisioningCriteriaService: ProvisioningCriteriaService) {}

  /**
   * Returns the Pprovisioning criteria and template data.
   * @returns {Observable<any>}
   */
  provisioningId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.provisioningId = route.paramMap.get('id');
    return this.provisioningCriteriaService.retrieveProvisioningCriteria(this.provisioningId);
  }

}

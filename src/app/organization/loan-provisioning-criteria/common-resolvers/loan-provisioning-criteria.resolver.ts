/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../../organization.service';
import { ProvisioningCriteriaService } from '@fineract/client';

/**
 * Loan Provisioning Criteria data resolver.
 */
@Injectable()
export class LoanProvisioningCriteriaResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private provisioningCriteriaService:ProvisioningCriteriaService) {}

  /**
   * Returns the loan provisioning criteria data.
   * @returns {Observable<any>}
   */
  provisioningId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.provisioningId = route.paramMap.get('id');
    return this.provisioningCriteriaService.retrieveProvisioningCriteria(this.provisioningId);
  }

}

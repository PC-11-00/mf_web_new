/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../../organization.service';
import { OfficesService } from '@fineract/client';

/**
 * Office and template data resolver.
 */
@Injectable()
export class EditOfficeResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private organizationService: OfficesService) {}

  /**
   * Returns the office and template data.
   * @returns {Observable<any>}
   */
  officeId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.officeId = route.paramMap.get('officeId');
    return this.organizationService.retrieveOfficeTemplate1(this.officeId, true);
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../../organization.service';
import { OfficesService } from '@fineract/client';

/**
 * Office data resolver.
 */
@Injectable()
export class OfficeResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private officesService: OfficesService) {}

  /**
   * Returns the office data.
   * @returns {Observable<any>}
   */
  officeId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.officeId = route.parent.paramMap.get('officeId');
    return this.officesService.retrieveOffice(this.officeId);
  }

}

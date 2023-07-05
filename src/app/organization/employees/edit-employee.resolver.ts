/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../organization.service';
import { StaffService } from '@fineract/client';

/**
 * Employees data resolver.
 */
@Injectable()
export class EditEmployeeResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private staffService: StaffService) {}

  /**
   * Returns the employees data.
   * @returns {Observable<any>}
   */
  employeeId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.employeeId  = route.paramMap.get('id');
    return this.staffService.retrieveOne8(this.employeeId);
  }

}

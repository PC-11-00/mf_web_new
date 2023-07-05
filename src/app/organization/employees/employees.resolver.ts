/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../organization.service';
import { StaffService } from '@fineract/client';

/**
 * Employees data resolver.
 */
@Injectable()
export class EmployeesResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private staffService: StaffService) {}

  /**
   * Returns the employees data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.staffService.retrieveAll16();
  }

}

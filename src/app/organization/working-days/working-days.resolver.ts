/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../organization.service';
import { WorkingDaysService } from '@fineract/client';

/**
 * Working Days data resolver.
 */
@Injectable()
export class WorkingDaysResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private workingDaysService: WorkingDaysService) {}

  /**
   * Returns the working days data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.workingDaysService.retrieveAll17();
  }

}

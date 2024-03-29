/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from 'app/organization/organization.service';
import { HolidaysService } from '@fineract/client';

/**
 * Holiday data template resolver.
 */
@Injectable()
export class HolidayTemplateResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private holidaysService: HolidaysService) {}

  /**
   * Returns the holiday data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.holidaysService.retrieveRepaymentScheduleUpdationTyeOptions();
  }

}

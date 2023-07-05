/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from 'app/organization/organization.service';
import { HolidaysService } from '@fineract/client';

/**
 * Holiday data resolver.
 */
@Injectable()
export class HolidayResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private holidaysService: HolidaysService) {}

  /**
   * Returns the holiday data.
   * @returns {Observable<any>}
   */
  holidayId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.holidayId  = route.paramMap.get('id');
    return this.holidaysService.retrieveOne7(this.holidayId);
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from 'app/organization/organization.service';
import { HolidaysService } from 'openapi/typescript_files';

/**
 * Holiday data resolver.
 */
@Injectable()
export class HolidayResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private organizationService: HolidaysService) {}

  /**
   * Returns the holiday data.
   * @returns {Observable<any>}
   */
  holidayId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.holidayId  = route.paramMap.get('id');
    return this.organizationService.retrieveOne7(this.holidayId);
  }

}

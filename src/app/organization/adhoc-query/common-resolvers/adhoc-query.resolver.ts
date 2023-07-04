/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from 'app/organization/organization.service';
import { AdhocQueryApiService } from '@fineract/client'; 

/**
 * Adhoc Query data resolver.
 */
@Injectable()
export class AdhocQueryResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private adhocQueryApiService: AdhocQueryApiService) {}

  /**
   * Returns the adhoc query data.
   * @returns {Observable<any>}
   */
  adhocQueryId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.adhocQueryId = route.paramMap.get('id');
    return this.adhocQueryApiService.retrieveAdHocQuery(this.adhocQueryId);
  }

}

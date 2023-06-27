/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from 'app/organization/organization.service';
import { AdhocQueryApiService } from '@fineract/client';

/**
 * Adhoc Query and template data resolver.
 */
@Injectable()
export class AdhocQueryAndTemplateResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private organizationService: AdhocQueryApiService) {}

  /**
   * Returns the adhoc query and template data.
   * @returns {Observable<any>}
   */
  adhocQueryId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.adhocQueryId = route.paramMap.get('id');
    return this.organizationService.template(this.adhocQueryId);
  }

}

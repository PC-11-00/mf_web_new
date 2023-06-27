/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../organization.service';
import { SearchAPIService } from '@fineract/client';

/**
 * Advance Search Template resolver.
 */
@Injectable()
export class AdvanceSearchTemplateResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private organizationService: SearchAPIService) {}

  /**
   * Returns the Advance Search template.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.organizationService.retrieveAdHocSearchQueryTemplate();
  }

}

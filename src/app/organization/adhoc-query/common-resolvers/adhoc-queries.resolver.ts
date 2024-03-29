/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../../organization.service';
import { AdhocQueryApiService } from '@fineract/client';

/**
 * Adhoc Queries data resolver.
 */
@Injectable()
export class AdhocQueriesResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private adhocQueryApiService: AdhocQueryApiService) {}

  /**
   * Returns the adhoc queries data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.adhocQueryApiService.retrieveAll2();
  }

}

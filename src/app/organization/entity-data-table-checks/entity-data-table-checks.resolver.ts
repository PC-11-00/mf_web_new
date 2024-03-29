/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../organization.service';
import { EntityDataTableService } from '@fineract/client';

/**
 * Entity Data Table Checks data resolver.
 */
@Injectable()
export class EntityDataTableChecksResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private entityDataTableService: EntityDataTableService) {}

  /**
   * Returns the Entity Data Table Checks data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.entityDataTableService.retrieveAll6();
  }

}

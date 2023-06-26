/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../system.service';
import { RolesService } from 'openapi/typescript_files';

/**
 * Roles and Permissions data resolver.
 */
@Injectable()
export class RolesAndPermissionsResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private rolesService: RolesService) {}

  /**
   * Returns the roles and permissions data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.rolesService.retrieveAllRoles();
  }

}

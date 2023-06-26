/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../system.service';
import { DataTablesService } from 'openapi/typescript_files';

/**
 * Manage data tables data resolver.
 */
@Injectable()
export class ManageDataTablesResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private dataTablesService: DataTablesService) {}

  /**
   * Returns the manage data tables data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.dataTablesService.getDatatables();
  }

}

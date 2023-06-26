/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { GroupsService } from '../groups.service';
import { DataTablesService } from 'openapi/typescript_files';

/**
 * Group Datatables data resolver.
 */
@Injectable()
export class GroupDatatablesResolver implements Resolve<Object> {

  /**
   * @param {GroupsService} GroupsService Groups service.
   */
  constructor(private dataTablesService: DataTablesService) { }

  /**
   * Returns the Group's Datatables data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.dataTablesService.getDatatables('m_group');
  }

}

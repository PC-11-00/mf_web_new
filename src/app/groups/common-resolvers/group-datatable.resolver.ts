/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { GroupsService } from '../groups.service';
import { DataTablesService } from '@fineract/client';

/**
 * Group Datatable data resolver.
 */
@Injectable()
export class GroupDatatableResolver implements Resolve<Object> {

  /**
   * @param {GroupsService} GroupsService Groups service.
   */
  constructor(private dataTablesService: DataTablesService) { }

  /**
   * Returns the Group's Datatable data.
   * @returns {Observable<any>}
   */
  datatableName: any;
  groupId: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.groupId = route.parent.parent.paramMap.get('groupId');
    this.datatableName = route.paramMap.get('datatableName');
    return this.dataTablesService.getDatatable1(this.datatableName,this.groupId);
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { GroupsService } from 'openapi/typescript_files';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { GroupsService } from '../groups.service';

/**
 * Group Accounts data resolver.
 */
@Injectable()
export class GroupAccountsResolver implements Resolve<Object> {

  /**
   * @param {GroupsService} GroupsService Groups service.
   */
  constructor(private groupsService: GroupsService) { }

  /**
   * Returns the Group's Acccounts data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot.
   * @returns {Observable<any>}
   */
  groupId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.groupId = route.parent.paramMap.get('groupId');
    return this.groupsService.retrieveAccounts(this.groupId);
  }

}

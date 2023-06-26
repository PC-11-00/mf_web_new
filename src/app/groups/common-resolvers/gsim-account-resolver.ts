/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { GroupsService } from 'openapi/typescript_files';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { GroupsService } from '../groups.service';

/**
 * GSIM Accounts data resolver.
 */
@Injectable()
export class GSIMAccountsResolver implements Resolve<Object> {

  /**
   * @param {GroupsService} groupsService Groups service.
   */
  constructor(private groupsService: GroupsService) { }

  /**
   * Returns the Group's GSIM Acccounts data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot.
   * @returns {Observable<any>}
   */
  groupId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.groupId = route.parent.paramMap.get('groupId');
    return this.groupsService.retrieveGsimAccounts(this.groupId);
  }

}

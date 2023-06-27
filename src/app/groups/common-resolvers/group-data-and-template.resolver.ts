/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { GroupsService } from '@fineract/client';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { GroupsService } from '../groups.service';

/**
 * Groups data and template resolver.
 */
@Injectable()
export class GroupDataAndTemplateResolver implements Resolve<Object> {

  /**
   * @param {GroupsService} GroupsService Groups service.
   */
  constructor(private groupsService: GroupsService) { }

  /**
   * Returns the Groups data and template.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  groupId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.groupId = route.paramMap.get('groupId');
    return this.groupsService.retrieveOne15(this.groupId);
  }

}

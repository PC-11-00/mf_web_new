/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { GroupsService } from '../groups.service';
import { RunReportsService } from '@fineract/client';

/**
 * Group Summary resolver.
 */
@Injectable()
export class GroupSummaryResolver implements Resolve<Object> {

  /**
   * @param {GroupsService} GroupsService Groups service.
   */
  constructor(private runReportsService: RunReportsService) { }

  /**
   * Returns the Group Summary data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const groupId = route.parent.paramMap.get('groupId');
    return this.runReportsService.runReport('GroupSummaryCounts');
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CalendarService, CentersService, GroupsService, RunReportsService } from '@fineract/client';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { CentersService } from '../centers.service';

/**
 * Group Actions data resolver.
 */
@Injectable()
export class CenterActionsResolver implements Resolve<Object> {

  /**
   * @param {CentersService} centersService Savings service.
   */
  constructor(private centersService: CentersService,
    private groupsService:GroupsService,
    private calendarService:CalendarService,
    private runReportsService:RunReportsService) { }

  /**
   * Returns the Centers account actions data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  centerId:any;
  calendarId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const actionName = route.paramMap.get('name');
    this.centerId = route.paramMap.get('centerId') || route.parent.parent.paramMap.get('centerId');
    switch (actionName) {
      case 'Assign Staff':
        return this.groupsService.retrieveOne15(this.centerId,true,undefined);
      case 'Attendance':
        return this.centersService.retrieveOne14(this.centerId);
      case 'Manage Groups':
        return this.centersService.retrieveOne14(this.centerId);
      case 'Attach Meeting':
        return this.calendarService.retrieveNewCalendarDetails('centers',this.centerId);
      case 'Edit Meeting':
      case 'Edit Meeting Schedule':
        this.calendarId = route.queryParamMap.get('calendarId');
        return this.calendarService.retrieveCalendar(this.calendarId,'',this.centerId );
      case 'Staff Assignment History':
        return this.runReportsService.runReport('Staff Assignment History');
      default:
        return undefined;
    }
  }

}

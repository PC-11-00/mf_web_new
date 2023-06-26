/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CalendarService, GroupsService } from 'openapi/typescript_files';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { GroupsService } from '../groups.service';

/**
 * Group Actions data resolver.
 */
@Injectable()
export class GroupActionsResolver implements Resolve<Object> {

  /**
   * @param {GroupsService} groupsService Groups service.
   */
  constructor(private groupsService: GroupsService,
              private calendarService: CalendarService) { }

  /**
   * Returns the group actions data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  groupId:any;
  calendarId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const actionName = route.paramMap.get('action');
    this.groupId = route.paramMap.get('groupId') || route.parent.parent.paramMap.get('groupId');
    switch (actionName) {
      case 'Attendance':
      case 'Manage Members':
      case 'Transfer Clients':
        return this.groupsService.retrieveOne15(this.groupId);
      case 'Assign Staff':
        return this.groupsService.retrieveOne15(this.groupId);
      case 'Close':
        return this.groupsService.retrieveTemplate7(null,null,null,'close');
      case 'Attach Meeting':
        return this.calendarService.retrieveNewCalendarDetails('groups',this.groupId);
      case 'Edit Meeting':
      case 'Edit Meeting Schedule':
        this.calendarId = route.queryParamMap.get('calendarId');
        return this.calendarService.retrieveCalendar(this.calendarId,'groups',this.groupId);
      default:
        return undefined;
    }
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { TasksService } from '../tasks.service';
import { AuditsService } from 'openapi/typescript_files';

/**
 * Checker Inbox Detail resolver.
 */
@Injectable()
export class GetCheckerInboxDetailResolver implements Resolve<Object> {

    /**
     * @param {TasksService} tasksService Tasks service.
     */
    constructor(private auditsService: AuditsService) { }

    /**
     * Returns the detail data of the checker inbox.
     * @returns {Observable<any>}
     */
    checkerId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.checkerId = route.paramMap.get('id');
        return this.auditsService.retrieveAuditEntry(this.checkerId);
    }

}

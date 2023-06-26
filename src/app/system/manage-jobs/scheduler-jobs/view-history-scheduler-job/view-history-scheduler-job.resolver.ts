/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable, forkJoin } from 'rxjs';

/** Custom Services */
import { SystemService } from '../../../system.service';
import { SCHEDULERJOBService } from 'openapi/typescript_files';

/**
 * View History Scheduler Jobs data resolver.
 */
@Injectable()
export class ViewHistorySchedulerJobsResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private sCHEDULERJOBService: SCHEDULERJOBService) {}

  /**
   * Returns the Scheduler Jobs History data.
   * @returns {Observable<any>}
   */
  jobId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.jobId = route.paramMap.get('id');
    return this.sCHEDULERJOBService.retrieveHistory(this.jobId);
  }

}

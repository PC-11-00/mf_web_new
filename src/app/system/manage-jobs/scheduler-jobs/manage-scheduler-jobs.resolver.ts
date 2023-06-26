/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable, forkJoin } from 'rxjs';

/** Custom Services */
import { SystemService } from '../../system.service';
import { SCHEDULERJOBService, SchedulerService } from 'openapi/typescript_files';

/**
 * Manage Scheduler Jobs data resolver.
 */
@Injectable()
export class ManageSchedulerJobsResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private schedulerService: SchedulerService,
    private sCHEDULERJOBService: SCHEDULERJOBService) { }

  /**
   * Returns the manage scheduler jobs data.
   * @returns {Observable<any>}
   */
  resolve() {
    return forkJoin([
      this.sCHEDULERJOBService.retrieveAll8(),
      this.schedulerService.retrieveStatus()
    ]);
  }

}

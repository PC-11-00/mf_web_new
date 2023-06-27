/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../../../system.service';
import { SCHEDULERJOBService } from '@fineract/client';

/**
 * Selected Scheduler Jobs data resolver.
 */
@Injectable()
export class ViewSchedulerJobResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private sCHEDULERJOBService: SCHEDULERJOBService) {}

  /**
   * Returns the selected scheduler job data.
   * @returns {Observable<any>}
   */
  jobId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.jobId = route.paramMap.get('id');
    return this.sCHEDULERJOBService.retrieveOne5(this.jobId);
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable} from 'rxjs';

/** Custom Services */
import { SystemService } from '../../system.service';
import { SCHEDULERJOBService } from '@fineract/client';

/**
 * Edit Scheduler Job data resolver.
 */
@Injectable()
export class ManageSchedulerJobResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private sCHEDULERJOBService: SCHEDULERJOBService) {}

  /**
   * Returns the edit scheduler jobs data.
   * @returns {Observable<any>}
   */
  jobId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.jobId = route.paramMap.get('id');
    return this.sCHEDULERJOBService.retrieveOne5(this.jobId);
  }

}

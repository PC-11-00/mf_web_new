/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../system.service';
import { ReportsService } from 'openapi/typescript_files';

/**
 * Reports data resolver.
 */
@Injectable()
export class ReportsResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private reportsService: ReportsService) {}

  /**
   * Returns the Reports data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.reportsService.retrieveReportList();
  }

}

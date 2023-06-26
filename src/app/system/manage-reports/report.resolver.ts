/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../system.service';
import { ReportsService } from 'openapi/typescript_files';

/**
 * Report data resolver.
 */
@Injectable()
export class ReportResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private reportsService: ReportsService) {}

  /**
   * Returns the Report data.
   * @returns {Observable<any>}
   */
  reportId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.reportId = route.paramMap.get('id');
    return this.reportsService.retrieveReport(this.reportId);
  }

}

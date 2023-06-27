/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../system.service';
import { ReportsService } from '@fineract/client';

/**
 * Report Template data resolver.
 */
@Injectable()
export class ReportTemplateResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private reportsService: ReportsService) {}

  /**
   * Returns the Report Template data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.reportsService.retrieveOfficeTemplate();
  }

}

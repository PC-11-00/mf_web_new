/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../system.service';
import { SpmSurveysService } from 'openapi/typescript_files';

/**
 * Surveys data resolver.
 */
@Injectable()
export class ManageSurveysResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private spmSurveysService: SpmSurveysService) {}

  /**
   * Returns the Surveys data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.spmSurveysService.fetchAllSurveys1();
  }

}

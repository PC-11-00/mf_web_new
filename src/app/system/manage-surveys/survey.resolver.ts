/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../system.service';
import { SpmSurveysService } from 'openapi/typescript_files';

/**
 * System data resolver.
 */
@Injectable()
export class SurveyResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private spmSurveysService: SpmSurveysService) {}

  /**
   * Returns the Survey data.
   * @returns {Observable<any>}
   */
  surveyId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.surveyId = route.paramMap.get('id');
    return this.spmSurveysService.findSurvey(this.surveyId);
  }

}

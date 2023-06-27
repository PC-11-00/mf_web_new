/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../../system.service';
import { CodesService } from '@fineract/client';

/**
 * Code Values data resolver.
 */
@Injectable()
export class CodeValuesResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private codesService: CodesService) { }

  /**
   * Returns the Code Values data.
   * @returns {Observable<any>}
   */
  codeId: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.codeId = route.paramMap.get('id');
    return this.codesService.retrieveCode(this.codeId);
  }

}

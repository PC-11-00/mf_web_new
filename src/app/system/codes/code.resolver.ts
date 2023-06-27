/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../system.service';
import { CodesService } from '@fineract/client';

/**
 * Code data resolver.
 */
@Injectable()
export class CodeResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private codesService: CodesService) {}

  /**
   * Returns the Code data.
   * @returns {Observable<any>}
   */
  id:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.id = route.paramMap.get('id');
    return this.codesService.retrieveCode(this.id);
  }

}

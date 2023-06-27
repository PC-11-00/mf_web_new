/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../system.service';
import { CodesService } from '@fineract/client';

/**
 * Codes data resolver.
 */
@Injectable()
export class CodesResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private codesService: CodesService) {}

  /**
   * Returns the Codes data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.codesService.retrieveCodes();
  }

}

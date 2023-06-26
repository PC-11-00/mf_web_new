/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../system.service';
import { HooksService } from 'openapi/typescript_files';

/**
 * Hooks template data resolver.
 */
@Injectable()
export class HooksTemplateResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private hooksService: HooksService) {}

  /**
   * Returns the hooks template data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.hooksService.template3();
  }

}

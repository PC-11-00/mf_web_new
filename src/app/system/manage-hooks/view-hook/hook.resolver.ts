/** Angular Imports */
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../../system.service';
import { HooksService } from 'openapi/typescript_files';

/**
 * Hook data resolver.
 */
@Injectable()
export class HookResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private hooksService: HooksService) {}

  /**
   * Returns the manage hooks data.
   * @returns {Observable<any>}
   */
  hookId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.hookId = route.paramMap.get('id');
    return this.hooksService.retrieveHook(this.hookId);
  }

}

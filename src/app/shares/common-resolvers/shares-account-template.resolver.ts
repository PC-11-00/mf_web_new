/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SharesService } from '../shares.service';
import { ShareAccountService } from 'openapi/typescript_files';

/**
 * Shares Account Template resolver.
 */
@Injectable()
export class SharesAccountTemplateResolver implements Resolve<Object> {

  /**
   * @param {SharesService} SharesService Shares service.
   */
  constructor(private shareAccountService: ShareAccountService) { }

  /**
   * Returns the Shares Account Template.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  clientId: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.clientId = route.parent.parent.paramMap.get('clientId');
    return this.shareAccountService.template7('share', this.clientId);
  }

}

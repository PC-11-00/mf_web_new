/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SharesService } from '../shares.service';
import { ShareAccountService } from 'openapi/typescript_files';

/**
 * Shares Account data resolver.
 */
@Injectable()
export class SharesAccountViewResolver implements Resolve<Object> {

  /**
   * @param {SharesService} SharesService Shares service.
   */
  constructor(private shareAccountService: ShareAccountService) { }

  /**
   * Returns the Shares Account data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  shareAccountId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.shareAccountId = route.paramMap.get('shareAccountId');
    return this.shareAccountService.retrieveAccount(this.shareAccountId, 'share');
  }

}

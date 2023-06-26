/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SharesService } from '../shares.service';
import { ShareAccountService } from 'openapi/typescript_files';

/**
 * Shares Account Actions data resolver.
 */
@Injectable()
export class ShareAccountActionsResolver implements Resolve<Object> {

  /**
   * @param {sharesService} SharesService Shares service.
   */
  constructor(private shareAccountService: ShareAccountService) { }

  /**
   * Returns the Shares account actions data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  shareAccountId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const actionName = route.paramMap.get('name');
    this.shareAccountId = route.paramMap.get('shareAccountId') || route.parent.parent.paramMap.get('shareAccountId');
    switch (actionName) {
      case 'Apply Additional Shares':
      case 'Redeem Shares':
      case 'Approve Additional Shares':
      case 'Reject Additional Shares':
        return this.shareAccountService.retrieveAccount(this.shareAccountId, 'share');
      default:
        return undefined;
    }
  }

}

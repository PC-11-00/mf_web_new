/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AccountingService } from '../accounting.service';
import { AccountingClosureService } from 'openapi/typescript_files';

/**
 * Closing entry data resolver.
 */
@Injectable()
export class ClosingEntryResolver implements Resolve<Object> {

  /**
   * @param {AccountingService} accountingService Accounting service.
   */
  constructor(private accountingService: AccountingClosureService) {}

  /**
   * Returns the gl account closure data.
   * @returns {Observable<any>}
   */
  glAccountClosureId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.glAccountClosureId = route.paramMap.get('id');
    return this.accountingService.retreiveClosure(this.glAccountClosureId);
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { LoansService } from 'openapi/typescript_files';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { LoansService } from '../loans.service';

/**
 * GLIM Account data resolver.
 */
@Injectable()
export class GLIMViewResolver implements Resolve<Object> {

  /**
   * @param {LoansService} loansService Loans service.
   */
  constructor(private loansService: LoansService) { }

  /**
   * Returns the Savings Account data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  glimId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const groupId = route.paramMap.get('groupId');
    this.glimId = route.paramMap.get('glimId');
    return this.loansService.getGlimRepaymentTemplate(this.glimId);
  }

}

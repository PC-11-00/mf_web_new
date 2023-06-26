/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { FixedDepositsService } from '../fixed-deposits.service';
import { FixedDepositAccountService } from 'openapi/typescript_files';

/**
 * Fixed Deposits Account Template resolver.
 */
@Injectable()
export class FixedDepositsAccountTemplateResolver implements Resolve<Object> {

  /**
   * @param {FixedDepositsService} fixedDepositsService Fixed Deposits service.
   */
  constructor(private fixedDepositsService: FixedDepositAccountService) { }

  /**
   * Returns the Fixed Deposits Account Template.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  clientId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.clientId = route.parent.parent.paramMap.get('clientId');
    return this.fixedDepositsService.template12(this.clientId);
  }

}

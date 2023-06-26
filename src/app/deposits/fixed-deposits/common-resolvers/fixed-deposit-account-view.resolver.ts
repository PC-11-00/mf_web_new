/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { FixedDepositsService } from 'app/deposits/fixed-deposits/fixed-deposits.service';
import { FixedDepositAccountService } from 'openapi/typescript_files';

/**
 * Fixed Deposits Account data resolver.
 */
@Injectable()
export class FixedDepositsAccountViewResolver implements Resolve<Object> {

  /**
   * @param {FixedDepositsService} fixedDepositsService Fixed Deposits service.
   */
  constructor(private fixedDepositsService: FixedDepositAccountService) { }

  /**
   * Returns the Fixed Deposits Account data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  fixedDepositAccountId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.fixedDepositAccountId = route.paramMap.get('fixedDepositAccountId');
    return this.fixedDepositsService.retrieveOne19(this.fixedDepositAccountId);
  }

}

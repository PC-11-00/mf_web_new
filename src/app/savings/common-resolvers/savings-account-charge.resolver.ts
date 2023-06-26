/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SavingsService } from '../savings.service';
import { SavingsChargesService } from 'openapi/typescript_files';

/**
 * Savings Account Charge data resolver.
 */
@Injectable()
export class SavingsAccountChargeResolver implements Resolve<Object> {

  /**
   * @param {SavingsService} SavingsService Savings service.
   */
  constructor(private savingsChargesService: SavingsChargesService) { }

  /**
   * Returns the Savings Account Charge data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  savingAccountId: any;
  chargeId: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.savingAccountId = route.parent.paramMap.get('savingAccountId');
    this.chargeId = route.paramMap.get('id');
    return this.savingsChargesService.retrieveSavingsAccountCharge(this.savingAccountId, this.chargeId);
  }

}

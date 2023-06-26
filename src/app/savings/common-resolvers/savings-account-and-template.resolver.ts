/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SavingsService } from '../savings.service';
import { SavingsAccountService } from 'openapi/typescript_files';

/**
 * Savings Account data and template resolver.
 */
@Injectable()
export class SavingsAccountAndTemplateResolver implements Resolve<Object> {

  /**
   * @param {SavingsService} SavingsService Savings service.
   */
  constructor(private savingsAccountService: SavingsAccountService) { }

  /**
   * Returns the Savings Account data and template.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  savingAccountId: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.savingAccountId = route.paramMap.get('savingAccountId');
    return this.savingsAccountService.retrieveOne25(this.savingAccountId);
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SavingsService } from '../savings.service';
import { SavingsAccountService } from '@fineract/client';

/**
 * Savings Account Template resolver.
 */
@Injectable()
export class SavingsAccountTemplateResolver implements Resolve<Object> {

  /**
   * @param {savingsService} SavingsService Savings service.
   */
  constructor(private savingsAccountService: SavingsAccountService) { }

  /**
   * Returns the Shares Account Template.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  entityId: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.entityId = route.paramMap.get('clientId') || route.paramMap.get('groupId') || route.paramMap.get('centerId');
    const isGroup = (route.paramMap.get('groupId') || route.paramMap.get('centerId')) ? true : false;
    if (isGroup) {
      return this.savingsAccountService.template14(null, this.entityId, null);
    }
    else {
      return this.savingsAccountService.template14(this.entityId, null, null);
    }
  }

}

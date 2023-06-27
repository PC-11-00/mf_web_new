/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AccountingService } from '../accounting.service';
import { AccountingRulesService } from '@fineract/client';

/**
 * Accounting rule data resolver.
 */
@Injectable()
export class AccountingRuleResolver implements Resolve<Object> {

  /**
   * @param {AccountingService} accountingService Accounting service.
   */
  constructor(private accountingService: AccountingRulesService) {}

  /**
   * Returns the accounting rule data.
   * @returns {Observable<any>}
   */
  id:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.id = route.paramMap.get('id');
    return this.accountingService.retreiveAccountingRule(this.id);
  }

}

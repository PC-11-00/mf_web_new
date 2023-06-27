/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AccountingService } from '../accounting.service';
import { AccountingRulesService } from '@fineract/client';

/**
 * Accounting rules associations data resolver.
 */
@Injectable()
export class AccountingRulesAssociationsResolver implements Resolve<Object> {

  /**
   * @param {AccountingService} accountingService Accounting service.
   */
  constructor(private accountingService: AccountingRulesService) {}

  /**
   * Returns the accounting rules associations data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.accountingService.retrieveAllAccountingRules();
  }

}

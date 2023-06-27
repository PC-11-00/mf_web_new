/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/** Custom Services */
import { AccountingService } from '../accounting.service';
import { GeneralLedgerAccountService } from '@fineract/client';

/**
 * GL Account and chart of accounts template data resolver.
 */
@Injectable()
export class GlAccountAndChartOfAccountsTemplateResolver implements Resolve<Object> {

  /**
   * @param {AccountingService} accountingService Accounting service.
   */
  constructor(private accountingService: GeneralLedgerAccountService) {}

  /**
   * Returns the gl account and chart of accounts template data.
   * @returns {Observable<any>}
   */
  id:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.id = route.paramMap.get('id');

    return this.accountingService.retreiveAccount(this.id, true).pipe(
      map((glAccountData: any) => {
        let accountOptions = [];
        switch (glAccountData.type.value) {
          case 'ASSET': accountOptions = glAccountData.assetHeaderAccountOptions;
          break;
          case 'EQUITY': accountOptions = glAccountData.equityHeaderAccountOptions;
          break;
          case 'EXPENSE': accountOptions = glAccountData.expenseHeaderAccountOptions;
          break;
          case 'INCOME': accountOptions = glAccountData.incomeHeaderAccountOptions;
          break;
          case 'LIABILITY': accountOptions = glAccountData.liabilityHeaderAccountOptions;
          break;
        }
        if (glAccountData.parentId) {
          glAccountData.parent = accountOptions.find((accountOption: any) => {
            return accountOption.id === glAccountData.parentId;
          });
        }
        return glAccountData;
      })
    );
  }

}

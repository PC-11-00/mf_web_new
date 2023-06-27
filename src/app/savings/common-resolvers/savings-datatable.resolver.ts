/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SavingsService } from '../savings.service';
import { DataTablesService } from '@fineract/client';

/**
 * Savings Datatable data resolver.
 */
@Injectable()
export class SavingsDatatableResolver implements Resolve<Object> {

  /**
   * @param {SavingsService} SavingsService Savings service.
   */
  constructor(private dataTablesService: DataTablesService) { }

  /**
   * Returns the Savings Account's Datatable data.
   * @returns {Observable<any>}
   */
  accountId: any;
  datatableId: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const accountId = route.parent.parent.paramMap.get('savingAccountId') || route.parent.parent.paramMap.get('fixedDepositAccountId') || route.parent.parent.paramMap.get('recurringDepositAccountId');
    const datatableName = route.paramMap.get('datatableName');
    this.datatableId = route.paramMap.get('datatableId');
    return this.dataTablesService.getDatatableManyEntry(datatableName, this.accountId, this.datatableId, null, true);
  }

}

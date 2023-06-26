/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AccountingService } from '../../accounting.service';
import { MappingFinancialActivitiesToAccountsService } from 'openapi/typescript_files';

/**
 * Financial activity mapping data resolver.
 */
@Injectable()
export class FinancialActivityMappingResolver implements Resolve<Object> {

  /**
   * @param {AccountingService} accountingService Accounting service.
   */
  constructor(private accountingService: MappingFinancialActivitiesToAccountsService) {}

  /**
   * Returns the financial activity mapping data.
   * @returns {Observable<any>}
   */
  financialActivityAccountId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.financialActivityAccountId = route.paramMap.get('id');
    return this.accountingService.retreive(this.financialActivityAccountId);
  }

}

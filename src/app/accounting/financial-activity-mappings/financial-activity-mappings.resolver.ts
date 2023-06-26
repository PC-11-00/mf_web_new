/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AccountingService } from '../accounting.service';
import { MappingFinancialActivitiesToAccountsService } from 'openapi/typescript_files';

/**
 * Financial activity mappings data resolver.
 */
@Injectable()
export class FinancialActivityMappingsResolver implements Resolve<Object> {

  /**
   * @param {AccountingService} accountingService Accounting service.
   */
  constructor(private accountingService: MappingFinancialActivitiesToAccountsService) {}

  /**
   * Returns the financial activity mappings data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.accountingService.retrieveAll();
  }

}

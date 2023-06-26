/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ReportsService } from 'app/reports/reports.service';
import { RunReportsService } from 'openapi/typescript_files';

/**
 * Loans Transaction Reciept resolver.
 */
@Injectable()
export class LoansTransactionRecieptResolver implements Resolve<Object> {

  /**
   * @param {ReportsService} reportsService Reports service.
   */
  constructor(private runReportsService: RunReportsService) { }

  /**
   * Returns the Loans Transaction Reciept
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  data:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const transactionId = route.paramMap.get('id');
    this.data = {
      'output-type':	'PDF',
      R_transactionId:	transactionId,
      'tenantIdentifier':'default',
      'locale':'en',
      'dateFormat':'dd MMMM yyyy'
    };
    return this.runReportsService.runReport('Loan Transaction Receipt', this.data);
  }

}

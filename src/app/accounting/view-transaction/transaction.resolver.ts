/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AccountingService } from '../accounting.service';
import { JournalEntriesService } from '@fineract/client';

/**
 * Transaction data resolver.
 */
@Injectable()
export class TransactionResolver implements Resolve<Object> {

  /**
   * @param {AccountingService} accountingService Accounting service.
   */
  constructor(private accountingService: JournalEntriesService) {}

  /**
   * Returns the transaction data.
   * @returns {Observable<any>}
   */
  transactionId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.transactionId = route.paramMap.get('id');
    return this.accountingService.retrieveJournalEntryById(this.transactionId);
  }

}

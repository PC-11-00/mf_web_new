/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AccountingService } from '../../accounting.service';
import { ProvisioningEntriesService } from '@fineract/client';

/**
 * Provisioning journal entries data resolver.
 */
@Injectable()
export class ProvisioningJournalEntriesResolver implements Resolve<Object> {

  /**
   * @param {AccountingService} accountingService Accounting service.
   */
  constructor(private accountingService: ProvisioningEntriesService) {}

  /**
   * Returns the provisioning journal entries data.
   * @returns {Observable<any>}
   */
  id:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.id = route.paramMap.get('id');
    return this.accountingService.retrieveProvisioningEntry(this.id);
  }

}

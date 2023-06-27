/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AccountingService } from '../../accounting.service';
import { ProvisioningEntriesService } from '@fineract/client';

/**
 * Provisioning entry entries data resolver.
 */
@Injectable()
export class ProvisioningEntryEntriesResolver implements Resolve<Object> {

  /**
   * @param {AccountingService} accountingService Accounting service.
   */
  constructor(private accountingService: ProvisioningEntriesService) {}

  /**
   * Returns the provisioning entry entries data.
   * @returns {Observable<any>}
   */
  provisioningEntryId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.provisioningEntryId = route.paramMap.get('id');
    return this.accountingService.retrieveProviioningEntries(this.provisioningEntryId);
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AccountingService } from '../accounting.service';
import { ProvisioningEntriesService } from '@fineract/client';

/**
 * Provisioning entries data resolver.
 */
@Injectable()
export class ProvisioningEntriesResolver implements Resolve<Object> {

  /**
   * @param {AccountingService} accountingService Accounting service.
   */
  constructor(private accountingService: ProvisioningEntriesService) {}

  /**
   * Returns the provisioning entries data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.accountingService.retrieveAllProvisioningEntries();
  }

}

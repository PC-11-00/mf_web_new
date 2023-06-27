/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AccountingService } from '../accounting.service';
import { ProvisioningCategoryService } from '@fineract/client';

/**
 * Provisioning categories data resolver.
 */
@Injectable()
export class ProvisioningCategoriesResolver implements Resolve<Object> {

  /**
   * @param {AccountingService} accountingService Accounting service.
   */
  constructor(private accountingService: ProvisioningCategoryService) {}

  /**
   * Returns the Provisioning categories data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.accountingService.retrieveAll15();
  }

}

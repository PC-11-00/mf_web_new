/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../organization.service';
import { FundsService } from '@fineract/client';

/**
 * Manage Funds data resolver.
 */
@Injectable()
export class ManageFundsResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private organizationService: FundsService) {}

  /**
   * Returns the manage funds data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.organizationService.retrieveFunds();
  }

}

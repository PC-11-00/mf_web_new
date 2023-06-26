/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../organization.service';
import { CurrencyService } from 'openapi/typescript_files';

/**
 * Currencies data resolver.
 */
@Injectable()
export class CurrenciesResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private organizationService: CurrencyService) {}

  /**
   * Returns the currencies data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.organizationService.retrieveCurrencies();
  }

}

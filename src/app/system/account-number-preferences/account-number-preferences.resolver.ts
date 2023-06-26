/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../system.service';
import { AccountNumberFormatService } from 'openapi/typescript_files';

/**
 * Account Number Preferences data resolver.
 */
@Injectable()
export class AccountNumberPreferencesResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private accountNumberFormatService: AccountNumberFormatService) {}

  /**
   * Returns the Account Number Preferences data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.accountNumberFormatService.retrieveAll3();
  }

}

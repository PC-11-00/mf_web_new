/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../../system.service';
import { AccountNumberFormatService } from '@fineract/client';

/**
 * Account Number Preference data resolver.
 */
@Injectable()
export class AccountNumberPreferenceResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private accountNumberFormatService: AccountNumberFormatService) {}

  /**
   * Returns the Account Number Preference data.
   * @returns {Observable<any>}
   */
  accountNumberPreferenceId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.accountNumberPreferenceId = route.paramMap.get('id');
    return this.accountNumberFormatService.retrieveOne(this.accountNumberPreferenceId);
  }

}

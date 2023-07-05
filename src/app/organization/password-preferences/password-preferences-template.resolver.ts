/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../organization.service';
import { PasswordPreferencesService } from '@fineract/client';

/**
 * Password Preferences Template data resolver.
 */
@Injectable()
export class PasswordPreferencesTemplateResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private passwordPreferencesService: PasswordPreferencesService) {}

  /**
   * Returns the password preferences template data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.passwordPreferencesService.template21();
  }

}

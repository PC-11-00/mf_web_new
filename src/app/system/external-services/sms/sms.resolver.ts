/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../../system.service';
import { ExternalServicesService } from '@fineract/client';

/**
 * SMS Configuration data resolver.
 */
@Injectable()
export class SMSConfigurationResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private externalServicesService: ExternalServicesService) {}

  /**
   * Returns the SMS Configuration data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.externalServicesService.retrieveOne2('SMS');
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { EntityFieldConfigurationService } from '@fineract/client';

/**
 * Client Address Field Configuration resolver.
 */
@Injectable()
export class ClientAddressFieldConfigurationResolver implements Resolve<Object> {

    /**
     * @param {ClientsService} ClientsService Clients service.
     */
    constructor(private clientsService: EntityFieldConfigurationService) { }

    /**
     * Returns the Client Address Field Configuration.
     * @returns {Observable<any>}
     */
    resolve(): Observable<any> {
        return this.clientsService.getAddresses('ADDRESS');
    }

}

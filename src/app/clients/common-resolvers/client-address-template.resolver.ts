/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { ClientsAddressService } from '@fineract/client';

/**
 * Client Address Field Configuration resolver.
 */
@Injectable()
export class ClientAddressTemplateResolver implements Resolve<Object> {

    /**
     * @param {ClientsService} ClientsService Clients service.
     */
    constructor(private clientsService: ClientsAddressService) { }

    /**
     * Returns the Client Address Field Configuration.
     * @returns {Observable<any>}
     */
    resolve(): Observable<any> {
        return this.clientsService.getAddressesTemplate();
    }

}

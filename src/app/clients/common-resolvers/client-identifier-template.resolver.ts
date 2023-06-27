/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';


/** Custom Services */
import { ClientsService } from '../clients.service';
import { ClientIdentifierService } from '@fineract/client';

/**
 * Client Identifier Template resolver.
 */
@Injectable()
export class ClientIdentifierTemplateResolver implements Resolve<Object> {
    /**
     * @param {ClientsService} ClientsService Clients service.
     */
    constructor(private clientsService: ClientIdentifierService) { }
    /**
     * Returns the Client Identities data.
     * @returns {Observable<any>}
     */
    clientId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.clientId = route.parent.paramMap.get('clientId');
        return this.clientsService.newClientIdentifierDetails(this.clientId);
    }
}


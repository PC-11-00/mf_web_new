/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { ClientService } from '@fineract/client';

/**
 * Client Template resolver.
 */
@Injectable()
export class ClientTemplateResolver implements Resolve<Object> {

    /**
     * @param {ClientsService} ClientsService Clients service.
     */
    constructor(private clientsService: ClientService) { }

    /**
     * Returns the Client Template data.
     * @returns {Observable<any>}
     */
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.clientsService.retrieveTemplate5();
    }

}

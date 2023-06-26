/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { ClientService } from 'openapi/typescript_files';

/**
 * Clients data resolver.
 */
@Injectable()
export class ClientViewResolver implements Resolve<Object> {

    /**
     * @param {ClientsService} ClientsService Clients service.
     */
    constructor(private clientsService: ClientService) { }

    /**
     * Returns the Clients data.
     * @returns {Observable<any>}
     */
    clientId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.clientId = route.paramMap.get('clientId');
        return this.clientsService.retrieveOne11(this.clientId);
    }

}

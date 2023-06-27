/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { DocumentsService } from '@fineract/client';

/**
 * Client Documents resolver.
 */
@Injectable()
export class ClientDocumentsResolver implements Resolve<Object> {

    /**
     * @param {ClientsService} ClientsService Clients service.
     */
    constructor(private clientsService: DocumentsService) { }

    /**
     * Returns the Client's Documents data.
     * @returns {Observable<any>}
     */
    clientId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.clientId = route.parent.paramMap.get('clientId');
        return this.clientsService.retrieveAllDocuments('clients',this.clientId);
    }

}

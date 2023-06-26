/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { NotesService } from 'openapi/typescript_files';

/**
 * Client Notes resolver.
 */
@Injectable()
export class ClientNotesResolver implements Resolve<Object> {

    /**
     * @param {ClientsService} ClientsService Clients service.
     */
    constructor(private clientsService: NotesService) { }

    /**
     * Returns the Client's Notes.
     * @returns {Observable<any>}
     */
    clientId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.clientId = route.parent.paramMap.get('clientId');
        return this.clientsService.retrieveNotesByResource('clients',this.clientId);
    }

}

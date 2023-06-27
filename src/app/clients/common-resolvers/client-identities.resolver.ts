/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable, forkJoin, from } from 'rxjs';
import { map } from 'rxjs/operators';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { ClientIdentifierService, DocumentsService } from '@fineract/client';

/**
 * Client Identities resolver.
 */
@Injectable()
export class ClientIdentitiesResolver implements Resolve<Object> {
    /**
     * @param {ClientsService} ClientsService Clients service.
     */
    constructor(private clientsService: ClientIdentifierService,
        private documentsService: DocumentsService) { }
    /**
     * Returns the Client Identities data.
     * @returns {Observable<any>}
     */
    clientId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.clientId = route.parent.paramMap.get('clientId');
        let identitiesData: any;
        return this.clientsService.retrieveAllClientIdentifiers(this.clientId).pipe(map((identities: any) => {
            identitiesData = identities;
            const docObservable: Observable<any>[] = [];
            identities.forEach((identity: any) => {
                docObservable.push(this.documentsService.retrieveAllDocuments('client_identifiers',identity.id));
            });
            forkJoin(docObservable).subscribe(documents => {
                documents.forEach((document, index) => {
                    identitiesData[index].documents = document;
                });
            });
            return identitiesData;
        }));
    }
}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { RunReportsService } from 'openapi/typescript_files';

/**
 * Client Summary resolver.
 */
@Injectable()
export class ClientSummaryResolver implements Resolve<Object> {

    /**
     * @param {ClientsService} ClientsService Clients service.
     */
    constructor(private clientsService: RunReportsService) { }

    /**
     * Returns the Client Summary data.
     * @returns {Observable<any>}
     */
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const clientId = route.parent.paramMap.get('clientId');
        return this.clientsService.runReport('ClientSummary');
    }

}

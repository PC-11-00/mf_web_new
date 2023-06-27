/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { DataTablesService } from '@fineract/client';

/**
 * Client datatable resolver.
 */
@Injectable()
export class ClientDatatableResolver implements Resolve<Object> {

    /**
     * @param {ClientsService} ClientsService Clients service.
     */
    constructor(private clientsService: DataTablesService) { }

    /**
     * Returns the Client datatables.
     * @returns {Observable<any>}
     */
    clientId: any;
    datatableId: any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.clientId = route.parent.parent.paramMap.get('clientId');
        const datatableName = route.paramMap.get('datatableName');
        this.datatableId = route.paramMap.get('datatableId');

        return this.clientsService.getDatatableManyEntry(datatableName, this.clientId, this.datatableId, null, true);
    }

}

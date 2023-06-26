/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { ClientCollateralManagementService } from 'openapi/typescript_files';

/**
 * Client Charges data resolver.
 */
@Injectable()
export class ClientCollateralResolver implements Resolve<Object> {

    /**
     * @param {ClientsService} clientsService Clients service.
     */
    constructor(private clientsService: ClientCollateralManagementService) { }

    /**
     * Returns the Client Collateral data.
     * @returns {Observable<any>}
     */
    clientId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.clientId = route.parent.paramMap.get('clientId');
        return this.clientsService.getClientCollateralTemplate(this.clientId);
    }

}

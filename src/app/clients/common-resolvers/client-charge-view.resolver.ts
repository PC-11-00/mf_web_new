/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { ClientChargesService } from '@fineract/client';

/**
 * Client Charge data resolver.
 */
@Injectable()
export class ClientChargeViewResolver implements Resolve<Object> {

    /**
     * @param {ClientsService} ClientsService Clients service.
     */
    constructor(private clientsService: ClientChargesService) { }

    /**
     * Returns the Client Charge data.
     * @returns {Observable<any>}
     */
    clientId:any;
    chargeId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.clientId = route.parent.parent.parent.paramMap.get('clientId');
        this.chargeId = route.paramMap.get('chargeId');
        return this.clientsService.retrieveClientCharge(this.clientId, this.chargeId);
    }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { ClientFamilyMemberService } from 'openapi/typescript_files';

/**
 * Client Family Members resolver.
 */
@Injectable()
export class ClientFamilyMembersResolver implements Resolve<Object> {

    /**
     * @param {ClientsService} ClientsService Clients service.
     */
    constructor(private clientsService: ClientFamilyMemberService) { }

    /**
     * Returns the Clients data.
     * @returns {Observable<any>}
     */
    clientId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.clientId = route.parent.parent.paramMap.get('clientId');
        return this.clientsService.getFamilyMembers(this.clientId);
    }

}

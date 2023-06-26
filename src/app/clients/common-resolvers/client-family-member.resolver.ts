/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { ClientFamilyMemberService } from 'openapi/typescript_files';

/**
 * Client Family Member resolver.
 */
@Injectable()
export class ClientFamilyMemberResolver implements Resolve<Object> {

    /**
     * @param {ClientsService} ClientsService Clients service.
     */
    constructor(private clientsService: ClientFamilyMemberService) { }

    /**
     * Returns the Clients data.
     * @returns {Observable<any>}
     */
    clientId:any;
    familyMemberId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.clientId = route.parent.parent.parent.paramMap.get('clientId');
        this.familyMemberId = route.parent.paramMap.get('familyMemberId');
        return this.clientsService.getFamilyMember(this.familyMemberId,this.clientId);
    }

}

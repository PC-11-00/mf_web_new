/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AccountTransfersService } from '../account-transfers.service';
import { StandingInstructionsService } from 'openapi/typescript_files';

/**
 * View Standing Instructions resolver.
 */
@Injectable()
export class StandingInstructionsTemplateResolver implements Resolve<Object> {

    accountTypeId: any;

    /**
     * @param {accountTransfersService} AccountTransfersService Account Transfers service.
     */
    constructor(private accountTransfersService: StandingInstructionsService) { }

    /**
     * Returns the Standing Instructions Data.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    clientId:any;
    officeId:any;
    accountType:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.officeId = route.queryParamMap.get('officeId');
        this.accountType = route.queryParamMap.get('accountType');
        this.clientId = route.parent.paramMap.get('clientId');
        switch (this.accountType) {
            case 'fromloans':
                this.accountTypeId = '1';
                break;
            case 'fromsavings':
                this.accountTypeId = '2';
                break;
            default:
                this.accountTypeId = '0';
        }
        return this.accountTransfersService.template6(this.officeId, this.clientId , this.accountTypeId);
    }

}

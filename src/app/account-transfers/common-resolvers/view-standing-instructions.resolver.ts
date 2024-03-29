/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AccountTransfersService } from '../account-transfers.service';
import { StandingInstructionsService } from '@fineract/client';

/**
 * View Standing Instructions resolver.
 */
@Injectable()
export class ViewStandingInstructionsResolver implements Resolve<Object> {

    /**
     * @param {accountTransfersService} AccountTransfersService Account Transfers service.
     */
    constructor(private accountTransfersService: StandingInstructionsService) { }

    /**
     * Returns the Standing Instructions Data.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    standingInstructionsId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.standingInstructionsId = route.parent.paramMap.get('standingInstructionsId');
        return this.accountTransfersService.retrieveOne10(this.standingInstructionsId);
    }

}

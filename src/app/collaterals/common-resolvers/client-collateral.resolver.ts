/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { CollateralsService } from '../collaterals.service';
import { ClientCollateralManagementService } from 'openapi/typescript_files';

/**
 * Client Collateral data resolver.
 */
@Injectable()
export class ClientCollateralResolver implements Resolve<Object> {

    /**
     * @param {CollateralsService} collateralsService Collaterals service.
     */
    constructor(private collateralsService: ClientCollateralManagementService) { }

    /**
     * Returns the Client Collateral data.
     * @returns {Observable<any>}
     */
    clientId:any;
    collateralId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.clientId = route.parent.paramMap.get('clientId');
        this.collateralId = route.parent.paramMap.get('collateralId');
        return this.collateralsService.getClientCollateralData(this.clientId, this.collateralId);
    }

}

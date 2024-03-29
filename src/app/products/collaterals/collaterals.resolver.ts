/** Angular Imports */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { CollateralManagementService } from '@fineract/client';

/**
 * Collaterals data resolver
 */
@Injectable()
export class CollateralsResolver implements Resolve<Object> {
    /**
     * @param {ProductsService} productsService Products service
     */
    constructor(private collateralManagementService: CollateralManagementService) {}

    /**
     * Returns the All Collaterals Data
     * @returns {Observable<any>}
     */
    resolve(): Observable<any> {
        return this.collateralManagementService.getAllCollaterals();
    }
}

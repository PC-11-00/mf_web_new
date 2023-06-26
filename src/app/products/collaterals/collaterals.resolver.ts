/** Angular Imports */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { CollateralManagementService } from 'openapi/typescript_files';

/**
 * Collaterals data resolver
 */
@Injectable()
export class CollateralsResolver implements Resolve<Object> {
    /**
     * @param {ProductsService} productsService Products service
     */
    constructor(private productsService: CollateralManagementService) {}

    /**
     * Returns the All Collaterals Data
     * @returns {Observable<any>}
     */
    resolve(): Observable<any> {
        return this.productsService.getAllCollaterals();
    }
}

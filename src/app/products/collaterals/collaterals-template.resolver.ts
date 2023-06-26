/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom services */
import { ProductsService } from '../products.service';
import { CollateralManagementService } from 'openapi/typescript_files';

/**
 * Collaterals Template Resolver
 */
@Injectable()
export class CollateralTemplateResolver implements Resolve<Object> {
    /**
     * @param {ProductsService} productsService products Service
     */
    constructor(private productsService: CollateralManagementService) {}

    /**
     * Returns the product Data.
     * @returns {Observable<any>}
     */
    resolve(): Observable<any> {
        return this.productsService.getCollateralTemplate();
    }
}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { ChargesService } from 'openapi/typescript_files';

@Injectable()
export class ChargesTemplateAndResolver implements Resolve<Object> {

    constructor(private chargesService: ChargesService) { }

    /**
     * Returns the changes template and data.
     * @returns {Observable<any>}
     */
    savingProductId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.savingProductId = route.paramMap.get('id');
        return this.chargesService.retrieveCharge(this.savingProductId);
    }

}

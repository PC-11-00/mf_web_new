/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CentersService } from '@fineract/client';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { CentersService } from '../centers.service';

/**
 * Centers data and template resolver.
 */
@Injectable()
export class CenterDataAndTemplateResolver implements Resolve<Object> {

    /**
     * @param {CentersService} CentersService Centers service.
     */
    constructor(private centersService: CentersService) { }

    /**
     * Returns the Centers and template data.
     * @returns {Observable<any>}
     */
    centerId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.centerId = route.parent.paramMap.get('centerId');
        return this.centersService.retrieveOne14(this.centerId,true);
    }

}

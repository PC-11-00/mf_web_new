/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { CentersService } from '../centers.service';
import { DataTablesService } from 'openapi/typescript_files';

/**
 * Centers notes data resolver.
 */
@Injectable()
export class CenterDatatableResolver implements Resolve<Object> {

    /**
     * @param {CentersService} CentersService Centers service.
     */
    constructor(private dataTablesService: DataTablesService) { }

    /**
     * Returns the Centers Notes Data.
     * @returns {Observable<any>}
     */
    centerId: any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.centerId = route.parent.parent.paramMap.get('centerId');
        const datatableName = route.paramMap.get('datatableName');
        return this.dataTablesService.getDatatable1(datatableName, this.centerId);
    }

}

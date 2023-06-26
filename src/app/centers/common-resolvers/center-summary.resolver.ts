/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { CentersService } from '../centers.service';
import { RunReportsService } from 'openapi/typescript_files';

/**
 * Centers data resolver.
 */
@Injectable()
export class CenterSummaryResolver implements Resolve<Object> {

    /**
     * @param {CentersService} CentersService Centers service.
     */
    constructor(private runReportsService: RunReportsService) { }

    /**
     * Returns the Centers Summary Data.
     * @returns {Observable<any>}
     */
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const centerId = route.parent.paramMap.get('centerId');
        return this.runReportsService.runReport('GroupSummaryCounts');
    }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SearchService } from './search.service';
import { SearchAPIService } from 'openapi/typescript_files';

/**
 * Search Results data resolver.
 */
@Injectable()
export class SearchResolver implements Resolve<Object> {

  /**
   * @param {SearchService} searchService Notifications service.
   */
  constructor(private searchAPIService: SearchAPIService) {}

  /**
   * Returns the Search Resultsdata.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const query = route.queryParams['query'];
    const resource = route.queryParams['resource'];
    return this.searchAPIService.searchData(query, resource,false);
  }

}

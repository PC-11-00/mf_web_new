/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../system.service';
import { DataTablesService } from '@fineract/client';

/**
 * Data Table data resolver.
 */
@Injectable()
export class DataTableResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private dataTablesService: DataTablesService) {}

  /**
   * Returns the Data Table data.
   * TODO: Delete the extra column to avoid multiple usages of `this.columnsData.shift()`.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const dataTableName = route.paramMap.get('datatableName');
    return this.dataTablesService.getDatatable(dataTableName);
  }

}


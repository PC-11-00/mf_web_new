import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { SystemService } from 'app/system/system.service';
import { DataTablesService } from '@fineract/client';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareProductDatatablesResolver implements Resolve<boolean> {

  /**
   * @param {SystemService} systemService Products service.
   */
  constructor(private dataTablesService: DataTablesService) { }

  /**
   * Returns the loan product data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.dataTablesService.getDatatables('m_share_product');
  }
}

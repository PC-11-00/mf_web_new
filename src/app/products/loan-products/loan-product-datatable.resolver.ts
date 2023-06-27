import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SystemService } from 'app/system/system.service';
import { DataTablesService } from '@fineract/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanProductDatatableResolver implements Resolve<boolean> {

  /**
   * @param {SystemService} systemService Products service.
   */
  constructor(private dataTablesService: DataTablesService) { }

  /**
   * Returns the loan product data.
   * @returns {Observable<any>}
   */
  productId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.productId = route.parent.parent.paramMap.get('productId');
    const datatableName = route.paramMap.get('datatableName');
    return this.dataTablesService.getDatatable1( datatableName, this.productId);
  }

}

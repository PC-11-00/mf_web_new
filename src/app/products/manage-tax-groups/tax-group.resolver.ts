/** Angular Imports */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { TaxGroupService } from 'openapi/typescript_files';

/**
 * tax Group data resolver.
 */
@Injectable()
export class TaxGroupResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private productsService: TaxGroupService) {}

  /**
   * Returns the tax Group data.
   * @returns {Observable<any>}
   */
  taxGroupId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.taxGroupId = route.paramMap.get('id');
    return this.productsService.retrieveTaxGroup(this.taxGroupId);
  }
}

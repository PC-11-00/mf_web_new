/** Angular Imports */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { TaxGroupService } from '@fineract/client';

/**
 * tax Group data resolver.
 */
@Injectable()
export class TaxGroupResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private taxGroupService: TaxGroupService) {}

  /**
   * Returns the tax Group data.
   * @returns {Observable<any>}
   */
  taxGroupId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.taxGroupId = route.paramMap.get('id');
    return this.taxGroupService.retrieveTaxGroup(this.taxGroupId);
  }
}

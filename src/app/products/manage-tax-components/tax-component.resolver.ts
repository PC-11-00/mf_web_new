/** Angular Imports */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { TaxComponentsService } from '@fineract/client';

/**
 * tax Component data resolver.
 */
@Injectable()
export class TaxComponentResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private taxComponentsService: TaxComponentsService) {}

  /**
   * Returns the tax Component data.
   * @returns {Observable<any>}
   */
  taxComponentId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.taxComponentId = route.paramMap.get('id');
    return this.taxComponentsService.retrieveTaxComponent(this.taxComponentId);
  }
}

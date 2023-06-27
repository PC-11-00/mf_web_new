/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../../products.service';
import { ProductMixService } from '@fineract/client';

/**
 * View product mix data resolver.
 */
@Injectable()
export class ViewProductMixResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private productMixService: ProductMixService) {}

  /**
   * Returns the product mix.
   * @returns {Observable<any>}
   */
  id:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.id = route.paramMap.get('id');
    return this.productMixService.retrieveTemplate12(this.id);
  }
}

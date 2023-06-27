/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../../products.service';
import { SelfDividendService } from '@fineract/client';

/**
 * Share products data resolver.
 */
@Injectable()
export class DividendsResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private selfDividendService: SelfDividendService) {}

  /**
   * Returns the share products data.
   * @returns {Observable<any>}
   */
  id:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.id = route.paramMap.get('id');
    return this.selfDividendService.retrieveAll39(this.id);
  }

}

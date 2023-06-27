/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { LoanProductsService } from 'openapi/typescript_files';
import { any } from 'cypress/types/bluebird';

/**
 * Loan Product data resolver.
 */
@Injectable()
export class LoanProductResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private loanProductsService: LoanProductsService) { }
  
  productId:any;
  /**
   * Returns the loan product data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.productId = route.parent.paramMap.get('productId');
    return this.loanProductsService.retrieveLoanProductDetails(this.productId);
  }

}

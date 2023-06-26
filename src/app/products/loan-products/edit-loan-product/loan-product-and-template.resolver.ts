/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../../products.service';

/* OpenApi Transcirpt Service*/
import { LoanProductsService } from 'openapi/typescript_files';

/**
 * Loan product and template data resolver.
 */
@Injectable()
export class LoanProductAndTemplateResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private productsService: LoanProductsService) { }

  loanProductId: any;
  template:any;
  /**
   * Returns the loan product and template data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.loanProductId = route.parent.paramMap.get('productId');
    // this.template = 
    return this.productsService.retrieveLoanProductDetails(this.loanProductId);
  }

}

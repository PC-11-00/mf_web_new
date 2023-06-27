/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { LoanProductsService } from '@fineract/client';
// import { LoanProductsService } from '@fineract/client';

/**
 * Loan products data resolver.
 */
@Injectable()
export class LoanProductsResolver implements Resolve<Object> {

  /**
   *
   * @param {ProductsService} productsService Products service.
   */
  constructor(private loanProductsService: LoanProductsService) {}

  /**
   * Returns the loan products data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.loanProductsService.retrieveAllLoanProducts();
  }

}

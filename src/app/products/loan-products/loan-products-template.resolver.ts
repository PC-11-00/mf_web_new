/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { LoanProductsService } from '@fineract/client';

@Injectable()
export class LoanProductsTemplateResolver implements Resolve<Object> {

  constructor(private loanProductsService: LoanProductsService) {}

  /**
   * Returns the loan products template data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.loanProductsService.retrieveTemplate11();
  }

}

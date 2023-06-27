/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { LoanProductsService } from 'openapi/typescript_files';

/**
 * Products mix template data resolver.
 */
@Injectable()
export class ProductsMixTemplateResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private loanProductsService: LoanProductsService) {}

  /**
   * Returns the products mix template data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.loanProductsService.retrieveTemplate11(true);
  }

}

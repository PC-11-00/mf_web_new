/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { SavingsProductService } from 'openapi/typescript_files';

@Injectable()
export class SavingProductsTemplateResolver implements Resolve<Object> {

  constructor(private productsService: SavingsProductService) {}

  /**
   * Returns the saving products template data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.productsService.retrieveTemplate20();
  }

}

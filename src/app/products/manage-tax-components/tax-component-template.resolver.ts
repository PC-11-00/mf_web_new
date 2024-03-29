/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { TaxComponentsService } from '@fineract/client';

/**
 * Tax Component template data resolver.
 */
@Injectable()
export class TaxComponentTemplateResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private taxComponentsService: TaxComponentsService) {}

  /**
   * Returns the tax components template data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.taxComponentsService.retrieveTemplate21();
  }

}

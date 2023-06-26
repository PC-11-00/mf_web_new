/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { TaxComponentsService } from 'openapi/typescript_files';

/**
 * Manage Tax Component data resolver.
 */
@Injectable()
export class ManageTaxComponentsResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private productsService: TaxComponentsService) {}

  /**
   * Returns the tax components data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.productsService.retrieveAllTaxComponents();
  }

}

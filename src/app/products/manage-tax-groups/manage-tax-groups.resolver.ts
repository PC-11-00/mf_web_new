/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../products.service';
import { TaxGroupService } from '@fineract/client';

/**
 * Manage Tax Groups data resolver.
 */
@Injectable()
export class ManageTaxGroupsResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private taxGroupService: TaxGroupService) {}

  /**
   * Returns the tax groups data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.taxGroupService.retrieveAllTaxGroups();
  }

}

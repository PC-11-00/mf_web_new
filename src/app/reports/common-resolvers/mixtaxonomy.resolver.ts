/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ReportsService } from '../reports.service';
import { MixTaxonomyService } from '@fineract/client';

/**
 * Mix Taxononmy data resolver.
 */
@Injectable()
export class MixTaxonomyResolver implements Resolve<Object> {

  /**
   * @param {ReportsService} reportsService Reports service.
   */
  constructor(private mixTaxonomyService: MixTaxonomyService) {}

  /**
   * Returns the Mix Taxonomy data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.mixTaxonomyService.retrieveAll14();
  }

}

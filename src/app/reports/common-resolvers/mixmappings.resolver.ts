/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ReportsService } from '../reports.service';
import { MixMappingService } from '@fineract/client';

/**
 * Mix Mappings data resolver.
 */
@Injectable()
export class MixMappingsResolver implements Resolve<Object> {

  /**
   * @param {ReportsService} reportsService Reports service.
   */
  constructor(private mixMappingService: MixMappingService) {}

  /**
   * Returns Mix Mappings.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.mixMappingService.retrieveTaxonomyMapping();
  }

}

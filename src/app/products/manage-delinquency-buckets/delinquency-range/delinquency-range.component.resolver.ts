/** Angular Imports */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../../products.service';
import { DelinquencyRangeAndBucketsManagementService } from 'openapi/typescript_files';

/**
 * Delinquency Range Component data resolver.
 */
@Injectable()
export class DelinquencyRangeComponentsResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private delinquencyRangeAndBucketsManagementService: DelinquencyRangeAndBucketsManagementService) {}

  /**
   * Returns the delinquency ranges data.
   * @returns {Observable<any>}
   */
  delinquentcyRangeId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.delinquentcyRangeId = route.paramMap.get('rangeId');
    if (this.delinquentcyRangeId === null) {
      return this.delinquencyRangeAndBucketsManagementService.getDelinquencyRanges();
    } else {
      return this.delinquencyRangeAndBucketsManagementService.getDelinquencyRange(this.delinquentcyRangeId);
    }
  }

}

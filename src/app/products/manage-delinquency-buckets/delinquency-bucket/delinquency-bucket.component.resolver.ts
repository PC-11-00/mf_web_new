/** Angular Imports */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ProductsService } from '../../products.service';
import { DelinquencyRangeAndBucketsManagementService } from 'openapi/typescript_files';

/**
 * Delinquency Bucket Component data resolver.
 */
@Injectable()
export class DelinquencyBucketComponentsResolver implements Resolve<Object> {

  /**
   * @param {ProductsService} productsService Products service.
   */
  constructor(private delinquencyRangeAndBucketsManagementService: DelinquencyRangeAndBucketsManagementService) { }

  /**
   * Returns the delinquency buckets data.
   * @returns {Observable<any>}
   */
  delinquentcyBucketId: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.delinquentcyBucketId = route.paramMap.get('bucketId');
    if (this.delinquentcyBucketId === null) {
      return this.delinquencyRangeAndBucketsManagementService.getDelinquencyBuckets();
    } else {
      return this.delinquencyRangeAndBucketsManagementService.getDelinquencyBucket(this.delinquentcyBucketId);
    }
  }

}

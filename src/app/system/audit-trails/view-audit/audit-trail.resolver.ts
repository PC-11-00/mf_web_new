/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../../system.service';
import { AuditsService } from 'openapi/typescript_files';

/**
 * Audit Trail data resolver.
 */
@Injectable()
export class AuditTrailResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private auditsService: AuditsService) { }

  /**
   * Returns the Audit Trail data.
   * @returns {Observable<any>}
   */
  auditTrailId: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.auditTrailId = route.paramMap.get('id');
    return this.auditsService.retrieveAuditEntry(this.auditTrailId);
  }

}

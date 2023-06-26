import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { OrganizationService } from '../organization.service';
import { FundsService } from 'openapi/typescript_files';

@Injectable({
  providedIn: 'root'
})
export class ManageFundResolver implements Resolve<boolean> {
  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private organizationService: FundsService) {}

  /**
   * Returns the manage funds data.
   * @returns {Observable<any>}
   */
  fundId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.fundId = route.paramMap.get('id');
    return this.organizationService.retrieveFund(this.fundId);
  }
}

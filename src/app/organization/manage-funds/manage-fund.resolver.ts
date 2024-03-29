import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { OrganizationService } from '../organization.service';
import { FundsService } from '@fineract/client';

@Injectable({
  providedIn: 'root'
})
export class ManageFundResolver implements Resolve<boolean> {
  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private fundsService: FundsService) {}

  /**
   * Returns the manage funds data.
   * @returns {Observable<any>}
   */
  fundId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.fundId = route.paramMap.get('id');
    return this.fundsService.retrieveFund(this.fundId);
  }
}

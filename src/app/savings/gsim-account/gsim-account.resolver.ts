/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SavingsService } from '../savings.service';
import { GroupsService, SavingsAccountService } from 'openapi/typescript_files';

/**
 * GSIM Account data resolver.
 */
@Injectable()
export class GSIMViewResolver implements Resolve<Object> {

  /**
   * @param {SavingsService} savingsService Savings service.
   */
  constructor(private groupsService: GroupsService) { }

  /**
   * Returns the Savings Account data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  groupId: any;
  savingAccountId: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.groupId = route.paramMap.get('groupId');
    this.savingAccountId = route.paramMap.get('savingAccountId');
    return this.groupsService.retrieveGsimAccounts(this.groupId,this.savingAccountId);
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../../system.service';
import { RolesService } from '@fineract/client';

/**
 * Roles and Permission data resolver.
 */
@Injectable()
export class ViewRoleResolver implements Resolve<Object> {

    /**
     * @param {SystemService} systemService System service.
     */
    constructor(private rolesService: RolesService) { }

    /**
     * Returns the roles and permissions data.
     * @returns {Observable<any>}
     */
    id: any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.id = route.paramMap.get('id');
        return this.rolesService.retrieveRole(this.id);
    }

}

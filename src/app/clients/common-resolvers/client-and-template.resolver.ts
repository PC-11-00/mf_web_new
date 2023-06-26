/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { ClientService } from 'openapi/typescript_files';

/**
 * Clients data and template resolver.
 */
@Injectable()
export class ClientDataAndTemplateResolver implements Resolve<Object> {

  /**
   * @param {ClientsService} ClientsService Clients service.
   */
  constructor(private clientsService: ClientService) { }

  /**
   * Returns the Clients data and template.
   * @returns {Observable<any>}
   */
  clientId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.clientId = route.paramMap.get('clientId');
    return this.clientsService.retrieveTemplate5(this.clientId);
  }

}

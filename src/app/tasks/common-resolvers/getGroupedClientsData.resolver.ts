/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { TasksService } from '../tasks.service';
import { ClientService } from 'openapi/typescript_files';

/**
 * Grouped Client Data data resolver.
 */
@Injectable()
export class GetGroupedClientsData implements Resolve<Object> {

  /**
   * @param {TasksService} tasksService Tasks service.
   */
  constructor(private clientService: ClientService) {}

  /**
   * Returns the grouped client data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.clientService.retrieveAll21('c.status_enum=100',undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1000);
  }

}

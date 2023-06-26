/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { TasksService } from '../tasks.service';
import { OfficesService } from 'openapi/typescript_files';

/**
 * Offices data resolver.
 */
@Injectable()
export class GetOffices implements Resolve<Object> {

    /**
     * @param {TasksService} tasksService Tasks service.
     */
    constructor(private officesService: OfficesService) { }

    /**
     * Returns the offices data.
     * @returns {Observable<any>}
     */
    resolve(): Observable<any> {
        return this.officesService.retrieveOffices();
    }

}

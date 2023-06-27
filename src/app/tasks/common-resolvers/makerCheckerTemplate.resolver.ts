/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { TasksService } from '../tasks.service';
import { MakerCheckerOr4EyeFunctionalityService } from '@fineract/client';

/**
 * Maker Checker Template resolver.
 */
@Injectable()
export class MakerCheckerTemplate implements Resolve<Object> {

    /**
     * @param {TasksService} tasksService Tasks service.
     */
    constructor(private makerCheckerOr4EyeFunctionalityService: MakerCheckerOr4EyeFunctionalityService) { }

    /**
     * Returns the maker checker template data.
     * @returns {Observable<any>}
     */
    resolve(): Observable<any> {
        return this.makerCheckerOr4EyeFunctionalityService.retrieveAuditSearchTemplate1();
    }

}

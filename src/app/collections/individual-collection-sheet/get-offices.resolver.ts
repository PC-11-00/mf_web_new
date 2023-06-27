/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { CollectionsService } from '../collections.service';
import { OfficesService } from '@fineract/client';

/**
 * Returns all the offices data.
 */
@Injectable()
export class GetOfficesResolver implements Resolve<Object> {

    /**
     * @param {CollectionsService} CollectionsService Collections service.
     */
    constructor(private collectionsService: OfficesService) { }

    /**
     * Returns the Collection Office Data.
     * @returns {Observable<any>}
     */
    resolve(): Observable<any> {
        return this.collectionsService.retrieveOffices();
    }

}

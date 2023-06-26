/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { CentersService } from '../centers.service';
import { NotesService } from 'openapi/typescript_files';

/**
 * Centers notes data resolver.
 */
@Injectable()
export class CenterNotesResolver implements Resolve<Object> {

    /**
     * @param {CentersService} CentersService Centers service.
     */
    constructor(private notesService: NotesService) { }

    /**
     * Returns the Centers Notes Data.
     * @returns {Observable<any>}
     */
    centerId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.centerId = route.parent.paramMap.get('centerId');
        return this.notesService.retrieveNotesByResource('groups',this.centerId);
    }

}

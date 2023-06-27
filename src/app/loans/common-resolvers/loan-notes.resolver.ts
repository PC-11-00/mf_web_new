/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { LoansService } from '../loans.service';
import { NotesService } from '@fineract/client';

/**
 * Loans notes resolver.
 */
@Injectable()
export class LoanNotesResolver implements Resolve<Object> {

    /**
     * @param {LoansService} LoansService Loans service.
     */
    constructor(private notesService: NotesService) { }

    /**
     * Returns the Loans data.
     * @returns {Observable<any>}
     */
    loanId:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
      this.loanId = route.paramMap.get('loanId') || route.parent.paramMap.get('loanId');
      return this.notesService.retrieveNotesByResource('loans',this.loanId);
    }

}

import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { SavingsService } from '../savings.service';
import { DocumentsService } from '@fineract/client';

@Injectable({
  providedIn: 'root'
})
export class SavingDocumentsResolver implements Resolve<boolean> {

  /**
   * @param {SavingsService} savingsService Savings service.
   */
  constructor(private documentsService: DocumentsService) { }

  /**
   * Returns the Savings data.
   * @returns {Observable<any>}
   */
  savingAccountId: any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.savingAccountId = route.parent.paramMap.get('savingAccountId');
    return this.documentsService.retrieveAllDocuments('savings', this.savingAccountId);
  }
}

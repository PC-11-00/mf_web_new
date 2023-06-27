import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { TasksService } from 'app/tasks/tasks.service';
import { LoanAccountLockService } from '@fineract/client';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanLockedResolver implements Resolve<boolean> {

    /**
     * @param {TasksService} tasksService Tasks service.
     */
     constructor(private loanAccountLockService: LoanAccountLockService) { }

     /**
      * Returns all the loans data.
      * @returns {Observable<any>}
      */
     resolve(): Observable<any> {
         return this.loanAccountLockService.retrieveLockedAccounts("0", "200");
     }
}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { AccountTransfersService } from '../account-transfers.service';
import { SettingsService } from 'app/settings/settings.service';
import { StandingInstructionsService } from '@fineract/client';

/**
 * View Standing Instructions resolver.
 */
@Injectable()
export class ListTransactionsResolver implements Resolve<Object> {

    /**
     * @param {AccountTransfersService} accountTransfersService Account Transfers service.
     * @param {SettingsService} settingsService Settings Service.
     */
    constructor(private accountTransfersService: StandingInstructionsService,
        private settingsService: SettingsService) { }

    /**
     * Returns the Standing Instructions Data.
     * @param {ActivatedRouteSnapshot} route Route Snapshot
     * @returns {Observable<any>}
     */
    id:any;
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        this.id = route.parent.paramMap.get('standingInstructionsId');
        const dateFormat = this.settingsService.dateFormat;
        const locale = this.settingsService.language.code;
        return this.accountTransfersService.retrieveOne10(this.id, dateFormat, locale);
    }
}

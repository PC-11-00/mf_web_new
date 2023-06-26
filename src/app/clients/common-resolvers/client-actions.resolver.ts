/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { ProductsService } from 'app/products/products.service';
import { ClientChargesService, ClientService, CollateralManagementService, OfficesService, ScoreCardService, SpmSurveysService, UserGeneratedDocumentsService } from 'openapi/typescript_files';

/**
 * Client Actions data resolver.
 */
@Injectable()
export class ClientActionsResolver implements Resolve<Object> {

  /**
   * @param {ClientsService} clientsService Clients service.
   * @param {ProductsService} productsService Products Service
   */
  constructor(private clientsService: ClientService,
    private spmSurveysService: SpmSurveysService,
    private officesService: OfficesService,
    private scoreCardService: ScoreCardService,
    private clientChargesService: ClientChargesService,
    private userGeneratedDocumentsService:UserGeneratedDocumentsService,
    private collateralManagementService: CollateralManagementService) { }

  /**
   * Returns the clients actions data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  clientId:any;
  officeId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const actionName = route.paramMap.get('name');
    this.clientId = route.paramMap.get('clientId') || route.parent.parent.paramMap.get('clientId');
    this.officeId = route.paramMap.get('officeId') || route.parent.parent.paramMap.get('officeId');
    
    switch (actionName) {
      case 'Survey':
        return this.scoreCardService.findByClient1(this.clientId);
      case 'Take Survey':
        return this.spmSurveysService.fetchAllSurveys1();
      case 'Close':
        return this.clientsService.retrieveTemplate5(this.clientId,'close');
      case 'Reject':
        return this.clientsService.retrieveTemplate5(this.officeId,'reject');
      case 'Withdraw':
        return this.clientsService.retrieveTemplate5(this.officeId,'withdraw');
      case 'Transfer Client':
        return this.officesService.retrieveOffices();
      case 'Add Charge':
        return this.clientChargesService.retrieveTemplate4(this.clientId);
      case 'Create Collateral':
        return this.collateralManagementService.getAllCollaterals();
      case 'Client Screen Reports':
        return this.userGeneratedDocumentsService.retrieveAll40(0,0);
      case 'Assign Staff':
      case 'Update Default Savings':
        return this.clientsService.retrieveOne11(this.clientId,true);
      case 'Undo Transfer':
      case 'Accept Transfer':
      case 'Reject Transfer':
        return this.clientsService.retrieveTransferTemplate(this.clientId);
      case 'Create Self Service User':
        return this.clientsService.retrieveOne11(this.clientId);
      default:
        return undefined;
    }
  }

}

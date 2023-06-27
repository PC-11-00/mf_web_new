/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'app/clients/clients.service';
import { ClientChargesService, ClientTransactionService } from '@fineract/client';

/**
 * View Charge component.
 */
@Component({
  selector: 'mifosx-view-charge',
  templateUrl: './view-charge.component.html',
  styleUrls: ['./view-charge.component.scss']
})
export class ViewChargeComponent implements OnInit {

  /** Charge Data. */
  chargeData: any;
  /** Mat Table Column defs. */
  viewChargeTableColumns: string[] = ['id', 'officeName', 'type', 'transactionDate', 'amount', 'actions'];

  /**
   * Retrieves the selected job data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientChargesService,
              private clientTransactionService: ClientTransactionService) {
    this.route.data.subscribe((data: { clientChargeData: any }) => {
      this.chargeData = data.clientChargeData;
    });
   }

  ngOnInit() {

  }

  /**
   * Waive Charge.
   */
  waiveChargeObj:any;
  waiveCharge() {
    this.waiveChargeObj = { clientId: this.chargeData.clientId, resourceType: this.chargeData.id};
    this.clientService.payOrWaiveClientCharge(this.waiveChargeObj.clientId,this.waiveChargeObj.resourceType,this.waiveChargeObj,'waive').subscribe(() => {
      this.getChargeData();
    });
  }

  /**
   * Undo Transaction.
   */
  transactionData:any;
  undoTransaction(transactionId: any) {
    this.transactionData = { clientId: this.chargeData.clientId.toString(), transactionId: transactionId};
    this.clientTransactionService.undoClientTransaction(this.transactionData.clientId,this.transactionData.transactionId,'undo').subscribe(() => {
      this.getChargeData();
    });
  }

  /**
   * Get Charge Data.
   */
  getChargeData() {
    this.clientService.retrieveClientCharge(this.chargeData.clientId, this.chargeData.id).subscribe((data: any) => {
      this.chargeData = data;
    });
  }

  /**
   * Delete Charge.
   */
  deleteCharge() {
    this.clientService.deleteClientCharge(this.chargeData.clientId, this.chargeData.id).subscribe(() => {
      this.router.navigate(['../../clients', this.chargeData.clientId, 'general']);
    });
  }

}

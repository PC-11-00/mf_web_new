/** Angular Imports */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Services */
import { SavingsService } from 'app/savings/savings.service';
import { SettingsService } from 'app/settings/settings.service';

/** Custom Dialogs */
import { FormDialogComponent } from 'app/shared/form-dialog/form-dialog.component';
import { WaiveChargeDialogComponent } from '../custom-dialogs/waive-charge-dialog/waive-charge-dialog.component';
import { InactivateChargeDialogComponent } from '../custom-dialogs/inactivate-charge-dialog/inactivate-charge-dialog.component';
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';

/** Custom Models */
import { FormfieldBase } from 'app/shared/form-dialog/formfield/model/formfield-base';
import { InputBase } from 'app/shared/form-dialog/formfield/model/input-base';
import { DatepickerBase } from 'app/shared/form-dialog/formfield/model/datepicker-base';
import { Dates } from 'app/core/utils/dates';
import { SavingsChargesService } from 'openapi/typescript_files';

/**
 * View Charge Component.
 */
@Component({
  selector: 'mifosx-view-charge',
  templateUrl: './view-charge.component.html',
  styleUrls: ['./view-charge.component.scss']
})
export class ViewChargeComponent {

  /** Charge data. */
  chargeData: any;
  /** Savings Account Data */
  savingsAccountData: any;

  /**
   * Retrieves the Charge data from `resolve`.
   * @param {SavingsService} savingsService Savings Service
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {MatDialog} dialog Dialog reference.
   * @param {Dates} dateUtils Date Utils.
   * @param {SettingsService} settingsService Setting service
   */
  constructor(private savingsChargesService: SavingsChargesService,
              private route: ActivatedRoute,
              private dateUtils: Dates,
              private router: Router,
              public dialog: MatDialog,
              private settingsService: SettingsService) {
    this.route.data.subscribe((data: { savingsAccountCharge: any }) => {
      this.chargeData = data.savingsAccountCharge;
    });
    this.route.data.subscribe((data: { savingsAccountData: any }) => {
      this.savingsAccountData = data.savingsAccountData;
    });
  }

  /**
   * Pays the charge.
   */
  payCharge() {
    const formfields: FormfieldBase[] = [
      new InputBase({
        controlName: 'amount',
        label: 'Amount',
        value: '',
        type: 'number',
        required: true
      }),
      new DatepickerBase({
        controlName: 'dueDate',
        label: 'Payment Date',
        value: '',
        type: 'date',
        required: true
      })
    ];
    const data = {
      title: 'Pay Charge',
      layout: { addButtonText: 'Confirm' },
      formfields: formfields
    };
    const payChargeDialogRef = this.dialog.open(FormDialogComponent, { data });
    payChargeDialogRef.afterClosed().subscribe((response: any) => {
      if (response.data) {
        const locale = this.settingsService.language.code;
        const dateFormat = this.settingsService.dateFormat;
        const dataObject = {
          ...response.data.value,
          dueDate: this.dateUtils.formatDate(response.data.value.dueDate, dateFormat),
          dateFormat,
          locale
        };
        this.savingsChargesService.payOrWaiveSavingsAccountCharge(this.chargeData.accountId, this.chargeData.id, dataObject, 'pay')
          .subscribe(() => {
            this.reload();
          });
      }
    });
  }

  /**
   * Waive's the charge
   */
  waiveCharge() {
    const waiveChargeDialogRef = this.dialog.open(WaiveChargeDialogComponent, { data: { id: this.chargeData.id } });
    waiveChargeDialogRef.afterClosed().subscribe((response: any) => {
      if (response.confirm) {
        this.savingsChargesService.payOrWaiveSavingsAccountCharge(this.chargeData.accountId, this.chargeData.id, {}, 'waive')
          .subscribe(() => {
            this.reload();
          });
      }
    });
  }

  /**
   * Inactivate's the charge
   */
  inactivateCharge() {
    const inactivateChargeDialogRef = this.dialog.open(InactivateChargeDialogComponent, { data: { id: this.chargeData.id } });
    inactivateChargeDialogRef.afterClosed().subscribe((response: any) => {
      if (response.confirm) {
        this.savingsChargesService.payOrWaiveSavingsAccountCharge(this.chargeData.accountId, this.chargeData.id, {}, 'inactivate')
          .subscribe(() => {
            this.reload();
          });
      }
    });
  }

  /**
   * Edits the charge
   */
  editCharge() {
    const formfields: FormfieldBase[] = [
      new InputBase({
        controlName: 'amount',
        label: 'Amount',
        value: this.chargeData.amount || this.chargeData.amountOrPercentage,
        type: 'number',
        required: true
      })
    ];
    const data = {
      title: 'Edit Charge',
      layout: { addButtonText: 'Confirm' },
      formfields: formfields
    };
    const editChargeDialogRef = this.dialog.open(FormDialogComponent, { data });
    editChargeDialogRef.afterClosed().subscribe((response: any) => {
      if (response.data) {
        const locale = this.settingsService.language.code;
        const dateFormat = this.settingsService.dateFormat;
        const dataObject = {
          ...response.data.value,
          dateFormat,
          locale
        };
        this.savingsChargesService.updateSavingsAccountCharge(this.chargeData.accountId, this.chargeData.id, dataObject)
          .subscribe(() => {
            this.reload();
          });
      }
    });
  }

  /**
   * Deletes the charge
   */
  deleteCharge() {
    const deleteChargeDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `charge id:${this.chargeData.id}` }
    });
    deleteChargeDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.savingsChargesService.deleteSavingsAccountCharge(this.chargeData.accountId, this.chargeData.id)
          .subscribe(() => {
            this.reload();
          });
      }
    });
  }

  /**
   * Checks if charge is recurring
   */
  isRecurringCharge() {
    const chargeTimeType = this.chargeData.chargeTimeType.value;
    return chargeTimeType === 'Monthly Fee' || chargeTimeType === 'Annual Fee' || chargeTimeType === 'Weekly Fee';
  }

  /**
   * Refetches data fot the component
   * TODO: Replace by a custom reload component instead of hard-coded back-routing.
   */
  private reload() {
    const url: string = this.router.url.replace(`/${this.chargeData.id}`, '');
    const refreshUrl: string = this.router.url.slice(0, this.router.url.indexOf('savings-accounts') + 'savings-accounts'.length);
    this.router.navigateByUrl(refreshUrl, {skipLocationChange: true})
      .then(() => this.router.navigate([url]));
  }

}

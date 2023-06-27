import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoansService } from 'app/loans/loans.service';
import { OrganizationService } from 'app/organization/organization.service';
import { SettingsService } from 'app/settings/settings.service';
import { LoanChargesService, PaymentTypeService } from '@fineract/client';

@Component({
  selector: 'mifosx-adjust-loan-charge',
  templateUrl: './adjust-loan-charge.component.html',
  styleUrls: ['./adjust-loan-charge.component.scss']
})
export class AdjustLoanChargeComponent implements OnInit {
  /** Loan Id */
  loanId: any;
  chargeId: any;

  /** Payment Type Options */
  paymentTypes: any = [];
  chargeData: any = [];
  loanDetailsData: any = [];

  /** Show payment details */
  showPaymentDetails = false;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  /** Repayment Loan Form */
  adjustLoanChargeForm: FormGroup;

  /**
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {LoansService} loanService Loan Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private formBuilder: FormBuilder,
    private loanChargesService: LoanChargesService,
    private route: ActivatedRoute,
    private router: Router,
    private settingsService: SettingsService,
    private paymentTypeService: PaymentTypeService) {
    this.loanId = this.route.snapshot.params['loanId'];
    this.chargeId = this.route.snapshot.params['id'];
    this.route.data.subscribe((data: { loansAccountCharge: any, loanDetailsData: any }) => {
      this.chargeData = data.loansAccountCharge;
      this.loanDetailsData = data.loanDetailsData;
    });
  }

  /**
   * Creates the repayment loan form
   * and initialize with the required values
   */
  ngOnInit() {
    this.maxDate = this.settingsService.maxAllowedDate;
    this.createAdjustLoanChargeForm();
    this.setRepaymentLoanDetails();
  }

  /**
   * Creates the create close form.
   */
  createAdjustLoanChargeForm() {
    this.adjustLoanChargeForm = this.formBuilder.group({
      'amount': [this.chargeData.amount, Validators.required],
      'externalId': '',
      'paymentTypeId': '',
      'note': ''
    });
  }

  setRepaymentLoanDetails() {
    this.paymentTypeService.getAllPaymentTypes().subscribe((paymentTypes: any) => {
      this.paymentTypes = paymentTypes;
    });
  }

  /**
   * Add payment detail fields to the UI.
   */
  addPaymentDetails() {
    this.showPaymentDetails = !this.showPaymentDetails;
    if (this.showPaymentDetails) {
      this.adjustLoanChargeForm.addControl('accountNumber', new FormControl(''));
      this.adjustLoanChargeForm.addControl('checkNumber', new FormControl(''));
      this.adjustLoanChargeForm.addControl('routingCode', new FormControl(''));
      this.adjustLoanChargeForm.addControl('receiptNumber', new FormControl(''));
      this.adjustLoanChargeForm.addControl('bankNumber', new FormControl(''));
    } else {
      this.adjustLoanChargeForm.removeControl('accountNumber');
      this.adjustLoanChargeForm.removeControl('checkNumber');
      this.adjustLoanChargeForm.removeControl('routingCode');
      this.adjustLoanChargeForm.removeControl('receiptNumber');
      this.adjustLoanChargeForm.removeControl('bankNumber');
    }
  }

  /** Submits the repayment form */
  submit() {
    const adjustLoanChargeFormData = this.adjustLoanChargeForm.value;
    const locale = this.settingsService.language.code;
    const data = {
      ...adjustLoanChargeFormData,
      locale
    };
    this.loanChargesService.executeLoanCharge2(this.loanId, this.chargeId, data, 'adjustment')
      .subscribe((response: any) => {
        this.router.navigate(['../..'], { relativeTo: this.route });
      });
  }

}

/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dates } from 'app/core/utils/dates';

/** Custom Services */
import { FixedDepositsService } from 'app/deposits/fixed-deposits/fixed-deposits.service';
import { SettingsService } from 'app/settings/settings.service';
import { FixedDepositAccountService } from 'openapi/typescript_files';

/**
 * Approve Fixed Deposits Account Component
 */
@Component({
  selector: 'mifosx-approve-fixed-deposits-account',
  templateUrl: './approve-fixed-deposits-account.component.html',
  styleUrls: ['./approve-fixed-deposits-account.component.scss']
})
export class ApproveFixedDepositsAccountComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Approve Fixed Deposits Account form. */
  approveFixedDepositsAccountForm: FormGroup;
  /** Fixed Deposits Account Id */
  accountId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {FixedDepositsService} fixedDepositsService Fixed Deposits Service
   * @param {Dates} dateUtils Date Utils
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private formBuilder: FormBuilder,
              private fixedDepositsService: FixedDepositAccountService,
              private dateUtils: Dates,
              private route: ActivatedRoute,
              private router: Router,
              private settingsService: SettingsService) {
    this.accountId = this.route.parent.snapshot.params['fixedDepositAccountId'];
  }

  /**
   * Creates the approve fixed deposits form.
   */
  ngOnInit() {
    this.maxDate = this.settingsService.businessDate;
    this.createApproveFixedDepositsAccountForm();
  }

  /**
   * Creates the approve fixed deposits account form.
   */
  createApproveFixedDepositsAccountForm() {
    this.approveFixedDepositsAccountForm = this.formBuilder.group({
      'approvedOnDate': ['', Validators.required],
      'note': ['']
    });
  }

  /**
   * Submits the form and approves the fixed deposit account,
   * if successful redirects to the fixed deposit account.
   */
  submit() {
    const approveFixedDepositsAccountFormData = this.approveFixedDepositsAccountForm.value;
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevApprovedOnDate: Date = this.approveFixedDepositsAccountForm.value.approvedOnDate;
    if (approveFixedDepositsAccountFormData.approvedOnDate instanceof Date) {
      approveFixedDepositsAccountFormData.approvedOnDate = this.dateUtils.formatDate(prevApprovedOnDate, dateFormat);
    }
    const data = {
      ...approveFixedDepositsAccountFormData,
      dateFormat,
      locale
    };
    this.fixedDepositsService.handleCommands4(this.accountId, data, 'approve').subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}

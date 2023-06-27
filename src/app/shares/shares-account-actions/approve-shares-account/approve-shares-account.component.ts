/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

/** Custom Services */
import { SharesService } from 'app/shares/shares.service';
import { SettingsService } from 'app/settings/settings.service';
import { Dates } from 'app/core/utils/dates';
import { ShareAccountService } from '@fineract/client';

/**
 * Approve Shares Account Component
 */
@Component({
  selector: 'mifosx-approve-shares-account',
  templateUrl: './approve-shares-account.component.html',
  styleUrls: ['./approve-shares-account.component.scss']
})
export class ApproveSharesAccountComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Approve Share Account form. */
  approveSharesAccountForm: FormGroup;
  /** Shares Account Id */
  accountId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {SharesService} sharesService Shares Service
   * @param {Dates} dateUtils Date Utils
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   * @param {SettingsService} settingsService Settings Service.
   */
  constructor(private formBuilder: FormBuilder,
              private shareAccountService: ShareAccountService,
              private dateUtils: Dates,
              private route: ActivatedRoute,
              private router: Router,
              private settingsService: SettingsService) {
    this.accountId = this.route.parent.snapshot.params['shareAccountId'];
  }

  /**
   * Creates the approve shares form.
   */
  ngOnInit() {
    this.maxDate = this.settingsService.businessDate;
    this.createApproveSharesAccountForm();
  }

  /**
   * Creates the approve shares account form.
   */
  createApproveSharesAccountForm() {
    this.approveSharesAccountForm = this.formBuilder.group({
      'approvedDate': ['', Validators.required],
      'note': ['']
    });
  }

  /**
   * Submits the form and approves the share account,
   * if successful redirects to the share account.
   */
  submit() {
    const approveSharesAccountFormData = this.approveSharesAccountForm.value;
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevApprovedDate: Date = this.approveSharesAccountForm.value.approvedDate;
    if (approveSharesAccountFormData.approvedDate instanceof Date) {
      approveSharesAccountFormData.approvedDate = this.dateUtils.formatDate(prevApprovedDate, dateFormat);
    }
    const data = {
      ...approveSharesAccountFormData,
      dateFormat,
      locale
    };
    this.shareAccountService.handleCommands2('share',this.accountId, data, 'approve').subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}

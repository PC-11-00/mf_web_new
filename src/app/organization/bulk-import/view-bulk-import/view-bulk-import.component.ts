/** Angular Imports */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';

/** Custom Imports */
import { OrganizationService } from '../../organization.service';
import { BulkImports } from './bulk-imports';
import { BulkImportService, CentersService, ClientService, FixedDepositAccountService, GeneralLedgerAccountService, GroupsService, GuarantorsService, JournalEntriesService, LoansService, OfficesService, RecurringDepositAccountService, SavingsAccountService, ShareAccountService, StaffService, UsersService } from '@fineract/client';
import { SettingsService } from 'app/settings/settings.service';

/**
 * View Bulk Imports Component
 */
@Component({
  selector: 'mifosx-view-bulk-import',
  templateUrl: './view-bulk-import.component.html',
  styleUrls: ['./view-bulk-import.component.scss']
})
export class ViewBulkImportComponent implements OnInit {

  /** offices Data */
  officeData: any;
  /** staff Data */
  staffData: any;
  /** Entity Template */
  template: File;
  /** imports Data */
  importsData: any;
  /** bulk-import form. */
  bulkImportForm: FormGroup;
  /** array of deined bulk-imports */
  bulkImportsArray = BulkImports;
  /** bulk-import which user navigated to */
  bulkImport: any = {};
  /** Data source for imports table. */
  dataSource = new MatTableDataSource();
  /** Columns to be displayed in imports table. */
  displayedColumns: string[] =
    [
      'name',
      'importTime',
      'endTime',
      'completed',
      'totalRecords',
      'successCount',
      'failureCount',
      'download'
    ];

  /** Paginator for imports table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for imports table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  /** Imports table reference */
  @ViewChild('importsTable', { static: true }) importsTableRef: MatTable<Element>;

  /**
   * fetches offices and imports data from resolve
   * @param {ActivatedRoute} route ActivatedRoute
   * @param {FormBuilder} formBuilder FormBuilder
   * @param {OrganizationService} organizationService OrganizationService
   */
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private staffService: StaffService,
    private usersService: UsersService,
    private centersService: CentersService,
    private clientService: ClientService,
    private fixedDepositAccountService: FixedDepositAccountService,
    private generalLedgerAccountService: GeneralLedgerAccountService,
    private groupsService: GroupsService,
    private guarantorsService: GuarantorsService,
    private journalEntriesService: JournalEntriesService,
    private loansService: LoansService,
    private officesService: OfficesService,
    private recurringDepositAccountService: RecurringDepositAccountService,
    private savingsAccountService: SavingsAccountService,
    private shareAccountService: ShareAccountService,
    private settingsService: SettingsService,
    private bulkImportService:BulkImportService
  ) {
    this.bulkImport.name = this.route.snapshot.params['import-name'];
    this.route.data.subscribe((data: any) => {
      this.officeData = data.offices;
      this.importsData = data.imports;
    });
  }

  /**
   * Gets bulk import's properties.
   */
  ngOnInit() {
    this.bulkImport = this.bulkImportsArray.find((entry) => entry.name === this.bulkImport.name);
    this.createBulkImportForm();
    this.buildDependencies();
    this.setImports();
  }

  /**
   * Creates the bulk import form.
   */
  createBulkImportForm() {
    this.bulkImportForm = this.formBuilder.group({
      'officeId': [''],
      'staffId': [''],
      'legalForm': [''],
    });
  }

  /**
   * Subscribe to value changes and fetches select options accordingly.
   */
  buildDependencies() {
    this.bulkImportForm.get('officeId').valueChanges.subscribe((value: any) => {
      if (this.bulkImport.formFields >= 2) {
        this.staffService.retrieveAll16(value).subscribe((data: any) => {
          this.staffData = data;
        });
      }
    });
  }

  /**
   * Initializes the data source, paginator and sorter for imports table.
   */
  setImports() {
    this.dataSource = new MatTableDataSource(this.importsData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Gets bulk import's downloadable template from API.
   */
  downloadTemplate() {
    const officeId = this.bulkImportForm.get('officeId').value;
    const staffId = this.bulkImportForm.get('staffId').value;
    let legalFormType = '';
    /** Only for Client Bulk Imports */
    switch (this.bulkImportForm.get('legalForm').value) {
      case 'Person':
        legalFormType = 'CLIENTS_PERSON';
        break;
      case 'Entity':
        legalFormType = 'CLIENTS_ENTITY';
        break;
    }
    console.log(this.bulkImport.urlSuffix);

    if (this.bulkImport.urlSuffix === '/offices') {
      this.officesService.getOfficeTemplate(this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === '/users') {
      this.usersService.getUserTemplate(officeId, staffId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/groups") {
      this.groupsService.getGroupsTemplate(officeId, staffId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/loans") {
      this.loansService.getLoansTemplate(officeId, staffId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/savingsaccounts") {
      this.savingsAccountService.getSavingsTemplate(officeId, staffId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/fixeddepositaccounts") {
      this.fixedDepositAccountService.getFixedDepositTemplate(officeId, staffId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/glaccounts") {
      this.generalLedgerAccountService.getGlAccountsTemplate(this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/accounts/share") {
      this.shareAccountService.getSharedAccountsTemplate('share', officeId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/staff") {
      this.staffService.getTemplate1(officeId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/clients") {
      this.clientService.getClientTemplate(legalFormType, officeId, staffId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/centers") {
      this.centersService.getCentersTemplate(officeId, staffId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/loans/repayments") {
      this.loansService.getLoanRepaymentTemplate(officeId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/savingsaccounts/transactions") {
      this.savingsAccountService.getSavingsTransactionTemplate(officeId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/fixeddepositaccounts/transaction") {
      this.fixedDepositAccountService.getFixedDepositTransactionTemplate(officeId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/recurringdepositaccounts/transactions") {
      this.recurringDepositAccountService.getRecurringDepositTransactionTemplate(officeId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/journalentries") {
      this.journalEntriesService.getJournalEntriesTemplate(officeId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
    else if (this.bulkImport.urlSuffix === "/loans/1/guarantors") {
      this.guarantorsService.getGuarantorTemplate(1, officeId, this.settingsService.dateFormat).subscribe((res: any) => {
        const contentType = res.type;
        const fileOfBlob = new File([res], 'template.xls', { type: contentType });
        window.open(window.URL.createObjectURL(fileOfBlob));
      });
    }
  }

  /**
   * Sets file form control value.
   * @param {any} $event file change event.
   */
  onFileSelect($event: any) {
    if ($event.target.files.length > 0) {
      this.template = $event.target.files[0];
    }
  }

  /**
   * Upload excel file containing bulk import data.
   */
  uploadTemplate() {
    let legalFormType = '';
    /** Only for Client Bulk Imports */
    if (this.bulkImport.name === 'Clients') {
      if (this.template.name.toLowerCase().includes('entity')) {
        legalFormType = 'CLIENTS_ENTITY';
      } else if (this.template.name.toLowerCase().includes('person')) {
        legalFormType = 'CLIENTS_PERSON';
      }
    }
    // this.organizationService.uploadImportDocument(this.template, this.bulkImport.urlSuffix, legalFormType).subscribe(() => { });
    if (this.bulkImport.urlSuffix === '/offices') {
      this.officesService.postOfficeTemplate(this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === '/users') {
      this.usersService.postUsersTemplate(this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/groups") {
      this.groupsService.postGroupTemplate(this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/loans") {
      this.loansService.postLoanTemplate(this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/savingsaccounts") {
      this.savingsAccountService.postSavingsTemplate(this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/fixeddepositaccounts") {
      this.fixedDepositAccountService.postFixedDepositTemplate(this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/glaccounts") {
      this.generalLedgerAccountService.postGlAccountsTemplate(this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/accounts/share") {
      this.shareAccountService.postSharedAccountsTemplate('share', this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/staff") {
      this.staffService.postTemplate(this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/clients") {
      this.clientService.postClientTemplate(legalFormType, this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/centers") {
      this.centersService.postCentersTemplate(this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/loans/repayments") {
      this.loansService.postLoanRepaymentTemplate(this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/savingsaccounts/transactions") {
      this.savingsAccountService.postSavingsTransactionTemplate(this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/fixeddepositaccounts/transaction") {
      this.fixedDepositAccountService.postFixedDepositTransactionTemplate(this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/recurringdepositaccounts/transactions") {
      this.recurringDepositAccountService.postRecurringDepositTransactionsTemplate(this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/journalentries") {
      this.journalEntriesService.postJournalEntriesTemplate(this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
    else if (this.bulkImport.urlSuffix === "/loans/1/guarantors") {
      this.guarantorsService.postGuarantorTemplate(1, this.settingsService.dateFormat, this.settingsService.language.code, this.template).subscribe(() => { });
    }
  }

  /**
   * Reloads imports data table.
   */
  refreshDocuments() {
    this.bulkImportService.retrieveImportDocuments(this.bulkImport.entityType).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.importsTableRef.renderRows();
    });
  }

  /**
   * Download import document.
   * @param {string} name Import Name
   * @param {any} id ImportID
   */
  downloadDocument(name: string, id: any) {
    this.bulkImportService.getOutputTemplate(id).subscribe((res: any) => {
      const contentType = res.type;
      const fileOfBlob = new File([res], name, { type: contentType });
      window.open(window.URL.createObjectURL(fileOfBlob));
    });
  }

}

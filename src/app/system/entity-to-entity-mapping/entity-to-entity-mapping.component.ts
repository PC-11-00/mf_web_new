/** Angular Imports */
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

/** Custom Services */
import { SystemService } from 'app/system/system.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from 'app/settings/settings.service';

/** Custom Components */
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { FormfieldBase } from 'app/shared/form-dialog/formfield/model/formfield-base';
import { SelectBase } from 'app/shared/form-dialog/formfield/model/select-base';
import { DatepickerBase } from 'app/shared/form-dialog/formfield/model/datepicker-base';
import { FormDialogComponent } from 'app/shared/form-dialog/form-dialog.component';
import { Dates } from 'app/core/utils/dates';
import { ChargesService, FineractEntityService, LoanProductsService, OfficesService, RolesService, SavingsProductService } from '@fineract/client';

/**
 * Entity to Entity Mapping Component
 */
@Component({
  selector: 'mifosx-entity-to-entity-mapping',
  templateUrl: './entity-to-entity-mapping.component.html',
  styleUrls: ['./entity-to-entity-mapping.component.scss']
})
export class EntityToEntityMappingComponent implements OnInit {

  /** Stores entity to entity mapping data */
  entityMappings: string[] = [];
  /** Stores Id of selected mapping type */
  selectedMappingType = 0;
  /** Stores Id of first Entity filter */
  selectedFromId = 0;
  /** Stores Id of second Entity filter */
  selectedToId = 0;
  /** Checks wheter the filter is default or customized */
  hasClickedFilters = false;
  /** Selected Entity Id */
  retrieveById = 0;
  /** relative Id */
  relId: number;
  /** Stores filtered data */
  filterPreference: any;
  /** details of particular map id */
  entityMap: any;
  /** Map Id to ID */
  mapIdToEdit: any;
  /**
   * stores the data for clicked mapType
   */
  firstEntityData: any = [];
  secondEntityData: any = [];
  firstMappingEntity: string;
  secondMappingEntity: string;

  /** Data source for entity table. */
  datasource: MatTableDataSource<any>;
  /** Data source for entity to entity list data. */
  entityMappingsListData: MatTableDataSource<any>;

  /** Filter Preference Form */
  filterPreferenceForm: FormGroup;
  /** List of Entity to Entity Mapping */
  displayedColumns: string[] = ['entitymapping'];
  /** Columns for details of a chosen mapping */
  entityMappingListColumns: string[] = ['fromentity', 'toentity', 'startdate', 'enddate', 'edit', 'delete'];

  /** Paginator for entity table. */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /** Sorter for entity table. */
  @ViewChild(MatSort) sort: MatSort;


  /**
   * Retrieves the codes data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private fineractEntityService: FineractEntityService,
    private officesService:OfficesService,
    private loanProductsService:LoanProductsService,
    private savingsProductService:SavingsProductService,
    private rolesService:RolesService,
    private chargesService:ChargesService,
    private dateUtils: Dates,
    private dialog: MatDialog,
    private settingsService: SettingsService) {
    this.route.data.subscribe((data: { entityMappings: any }) => {
      this.entityMappings = data.entityMappings;
    });
  }

  /**
   * Creates the filter preference form.
   */
  createFilterPreferenceForm() {
    this.filterPreferenceForm = this.formBuilder.group({
      'mappingFirstParamId': ['', Validators.required],
      'mappingSecondParamId': ['', Validators.required]
    });
  }

  /**
   * Sets the mapping table.
   */
  ngOnInit() {
    this.setMapping();
  }

  setMapping() {
    this.datasource = new MatTableDataSource(this.entityMappings);
  }

  /**
   * Displays filter based on mapping id
   * @param id Entity Mapping Id
   */
  showFilters(id: number) {
    this.selectedMappingType = id;
    this.hasClickedFilters = false;
    this.fetchRelatedData(this.selectedMappingType);
    this.selectedFromId = 0;
    this.selectedToId = 0;
  }

  /** Fetches data based on the selected mapping type */
  fetchRelatedData(id: number) {
    this.retrieveById = id;
    this.createFilterPreferenceForm();
    switch (this.retrieveById) {

      case 1:
        this.officesService.retrieveOffices().subscribe((response: any) => {
          this.firstEntityData = response;
          this.firstMappingEntity = 'Office';
        });
        this.loanProductsService.retrieveAllLoanProducts().subscribe((response: any) => {
          this.secondEntityData = response;
          this.secondMappingEntity = 'Loan Products';
        });
        break;
      case 2:
        this.officesService.retrieveOffices().subscribe((response: any) => {
          this.firstEntityData = response;
          this.firstMappingEntity = 'Office';
        });
        this.savingsProductService.retrieveAll34().subscribe((response: any) => {
          this.secondEntityData = response;
          this.secondMappingEntity = 'Saving Products';
        });
        break;
      case 3:
        this.officesService.retrieveOffices().subscribe((response: any) => {
          this.firstEntityData = response;
          this.firstMappingEntity = 'Office';
        });
        this.chargesService.retrieveAllCharges().subscribe((response: any) => {
          this.secondEntityData = response;
          this.secondMappingEntity = 'Charges';
        });
        break;
      case 4:
        this.rolesService.retrieveAllRoles().subscribe((response: any) => {
          this.firstEntityData = response;
          this.firstMappingEntity = 'Role';
        });
        this.loanProductsService.retrieveAllLoanProducts().subscribe((response: any) => {
          this.secondEntityData = response;
          this.secondMappingEntity = 'Loan Products';
        });
        break;
      case 5:
        this.rolesService.retrieveAllRoles().subscribe((response: any) => {
          this.firstEntityData = response;
          this.firstMappingEntity = 'Role';
        });
        this.savingsProductService.retrieveAll34().subscribe((response: any) => {
          this.secondEntityData = response;
          this.secondMappingEntity = 'Saving Products';
        });
        break;
    }

  }

  /**
   * Submits the filter preference form and creates a entityMappingList data
   */
  showFilteredData() {
    this.filterPreference = this.filterPreferenceForm.value;
    if (this.filterPreference.mappingFirstParamId === '') {
      this.filterPreference.mappingFirstParamId = 0;
    }
    if (this.filterPreference.mappingSecondParamId === '') {
      this.filterPreference.mappingSecondParamId = 0;
    }
    this.hasClickedFilters = true;

    this.selectedFromId = this.filterPreference.mappingFirstParamId;
    this.selectedToId = this.filterPreference.mappingSecondParamId;
    this.fineractEntityService.getEntityToEntityMappings(this.retrieveById, this.selectedFromId, this.selectedToId).subscribe((response: any) => {
      this.entityMappingsListData = new MatTableDataSource(response);
      this.entityMappingsListData.paginator = this.paginator;
      this.entityMappingsListData.sort = this.sort;
    });
  }

  /**
   * Shows the add entity screen
   * @param selectedType selected Map Type
   */
  showAddScreen(selectedType: number) {
    this.relId = selectedType;
    this.fetchRelatedData(this.relId);
    const formfields: FormfieldBase[] = [
      new SelectBase({
        controlName: 'fromId',
        label: this.firstMappingEntity,
        options: { label: 'name', value: 'id', data: this.firstEntityData },
        required: true
      }),
      new SelectBase({
        controlName: 'toId',
        label: this.secondMappingEntity,
        options: { label: 'name', value: 'id', data: this.secondEntityData },
        required: true
      }),
      new DatepickerBase({
        controlName: 'startDate',
        label: 'Start Date',
        type: 'date',
        required: false
      }),
      new DatepickerBase({
        controlName: 'endDate',
        label: 'End Date',
        type: 'date',
        required: false
      })
    ];
    const data = {
      title: 'Add Entity to Entity Mapping',
      layout: { addButtonText: 'Confirm' },
      formfields: formfields
    };
    const addEntitytoEntityMappingDialogRef = this.dialog.open(FormDialogComponent, { data });
    addEntitytoEntityMappingDialogRef.afterClosed().subscribe((response: any) => {
      if (response.data) {
        this.submitNew(response.data);
      }
    });
  }

  /**
   * Shows the edit entity screen
   * @param selectedMap selected Map Number
   * @param selectedType selected Map Type
   */
  showEditScreen(selectedMap: number, selectedType: number) {
    this.relId = selectedType;
    this.mapIdToEdit = selectedMap;
    this.fetchRelatedData(this.relId);
    this.fineractEntityService.retrieveOne4(selectedMap).subscribe((response: any) => {
      this.entityMap = response;
    });
    const formfields: FormfieldBase[] = [
      new SelectBase({
        controlName: 'fromId',
        label: this.firstMappingEntity,
        options: { label: 'name', value: 'id', data: this.firstEntityData },
        required: true
      }),
      new SelectBase({
        controlName: 'toId',
        label: this.secondMappingEntity,
        options: { label: 'name', value: 'id', data: this.secondEntityData },
        required: true
      }),
      new DatepickerBase({
        controlName: 'startDate',
        label: 'Start Date',
        type: 'date',
        required: false
      }),
      new DatepickerBase({
        controlName: 'endDate',
        label: 'End Date',
        type: 'date',
        required: false
      })
    ];
    const data = {
      title: 'Edit Entity to Entity Mapping',
      layout: { addButtonText: 'Confirm' },
      formfields: formfields
    };
    const editEntitytoEntityMappingDialogRef = this.dialog.open(FormDialogComponent, { data });
    editEntitytoEntityMappingDialogRef.afterClosed().subscribe((response: any) => {
      if (response.data) {
        this.submitEdit(response.data);
      }
    });
  }


  /**
   * Submits the new mapping
   * @param addMappingForm Add Mapping Form Data
   */
  submitNew(addMappingForm: any) {

    if (addMappingForm.value.fromId === '') {
      addMappingForm.value.fromId = undefined;
    }
    if (addMappingForm.value.toId === '') {
      addMappingForm.value.toId = undefined;
    }
    const dateFormat = this.settingsService.dateFormat;

    const startDate: Date = addMappingForm.value.startDate;
    const endDate: Date = addMappingForm.value.endDate;

    const newMappingData = addMappingForm.value;
    newMappingData.startDate = this.dateUtils.formatDate(startDate, dateFormat);
    newMappingData.endDate = this.dateUtils.formatDate(endDate, dateFormat);

    newMappingData.dateFormat = dateFormat;
    newMappingData.locale = this.settingsService.language.code;
    this.fineractEntityService.createMap(this.relId, newMappingData).subscribe((response: any) => {
      this.showFilteredData();
    });
  }

  /**
   * Submits the edited data
   * @param editMappingForm Edit Mapping Form Id
   */
  submitEdit(editMappingForm: any) {
    const dateFormat = this.settingsService.dateFormat;

    const startDate: Date = editMappingForm.value.startDate;
    const endDate: Date = editMappingForm.value.endDate;

    const newMappingData = editMappingForm.value;
    newMappingData.startDate = this.dateUtils.formatDate(startDate, dateFormat);
    newMappingData.endDate = this.dateUtils.formatDate(endDate, dateFormat);

    newMappingData.dateFormat = dateFormat;
    newMappingData.locale = this.settingsService.language.code;
    this.fineractEntityService.updateMap(this.mapIdToEdit, newMappingData).subscribe((response: any) => {
      this.showFilteredData();
    });
  }

  /**
   * Deletes the selected Map Id
   * @param id Map Id
   */
  delete(id: number) {
    const deleteNoteDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `Mapping id: ${id}` }
    });
    deleteNoteDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.fineractEntityService.delete4(id)
          .subscribe(() => {
            this.showFilteredData();
          });
      }
    });
  }

}

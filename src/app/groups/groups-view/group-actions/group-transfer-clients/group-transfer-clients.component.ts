/** Angular Imports */
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

/** Custom Services */
// import { GroupsService } from 'app/groups/groups.service';
import { SettingsService } from 'app/settings/settings.service';
import { GroupsService } from '@fineract/client';

/**
 * Group Transfer Clients component.
 */
@Component({
  selector: 'mifosx-group-transfer-clients',
  templateUrl: './group-transfer-clients.component.html',
  styleUrls: ['./group-transfer-clients.component.scss']
})
export class GroupTransferClientsComponent implements OnInit, AfterViewInit {

  /** Transfer Clients form. */
  transferClientsForm: FormGroup;
  /** Group Data */
  groupData: any;
  /** Group data. */
  groupsData: any = [];
  /** Staff data. */
  staffData: any;
  /** Client Members. */
  clientMembers: any[] = [];

  /**
   * Retrieves the offices data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation
   * @param {GroupsService} groupsService GroupsService.
   * @param {SettingsService} settingsService SettingsService
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private groupsService: GroupsService,
              private settingsService: SettingsService) {
    this.route.data.subscribe((data: { groupActionData: any }) => {
      this.groupData = data.groupActionData;
      this.clientMembers = this.groupData.clientMembers;
    });
  }

  ngOnInit() {
    this.createTransferClientsForm();
  }

  /**
   * Subscribes to Groups search filter:
   */
  ngAfterViewInit() {
    this.transferClientsForm.get('destinationGroupId').valueChanges.subscribe( (value: string) => {
      if (value.length >= 2) {
        this.groupsService.retrieveAll24(this.groupData.officeId,null,null,value,null,null,null,null,'name','ASC')
          .subscribe( (data: any) => {
            this.groupsData = data;
          });
      }
    });
  }

  /**
   * Creates the transfer clients form.
   */
  createTransferClientsForm() {
    this.transferClientsForm = this.formBuilder.group({
      'clients': ['', Validators.required],
      'inheritDestinationGroupLoanOfficer': [false],
      'destinationGroupId': ['', Validators.required]
    });
  }

  /**
   * Displays Group name in form control input.
   * @param {any} group Group data.
   * @returns {string} Group name if valid otherwise undefined.
   */
  displayGroup(group: any): string | undefined {
    return group ? group.name : undefined;
  }

  /**
   * Submits the group form and transfers the clients,
   * if successful redirects to group.
   */
  submit() {
    const locale = this.settingsService.language.code;
    const data = {
      ...this.transferClientsForm.value,
      destinationGroupId: this.transferClientsForm.get('destinationGroupId').value.id,
      locale
    };
    this.groupsService.activateOrGenerateCollectionSheet(this.groupData.id, data, 'transferClients').subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}

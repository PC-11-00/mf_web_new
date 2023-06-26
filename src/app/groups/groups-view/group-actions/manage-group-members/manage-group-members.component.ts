/** Angular Imports */
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

/** Custom Dialogs */
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';

/** Custom Services */
// import { GroupsService } from 'app/groups/groups.service';
import { ClientsService } from 'app/clients/clients.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientService, GroupsService } from 'openapi/typescript_files';

/**
 * Manage Group Members Component
 */
@Component({
  selector: 'mifosx-manage-group-members',
  templateUrl: './manage-group-members.component.html',
  styleUrls: ['./manage-group-members.component.scss']
})
export class ManageGroupMembersComponent implements AfterViewInit {

  /** Group Data */
  groupData: any;
  /** Client data. */
  clientsData: any = [];
  /** Client Members. */
  clientMembers: any[] = [];
  /** Client Choice. */
  clientChoice = new FormControl('');

  /**
   * Fetches group action data from `resolve`
   * @param {ActivatedRoute} route Activated Route
   * @param {GroupsService} groupsService Groups Service
   * @param {ClientsService} clientsService Clients Service
   * @param {MatDialog} dialog Mat Dialog
   */
  constructor(private route: ActivatedRoute,
    private groupsService: GroupsService,
    private clientsService: ClientService,
    public dialog: MatDialog) {
    this.route.data.subscribe((data: { groupActionData: any }) => {
      this.groupData = data.groupActionData;
      this.clientMembers = data.groupActionData.clientMembers || [];
    });
  }


  /**
   * Subscribes to Clients search filter:
   */
  ngAfterViewInit() {
    this.clientChoice.valueChanges.subscribe((value: string) => {
      if (value.length >= 2) {
        this.clientsService.retrieveAll21(null, this.groupData.officeId, null, value, null, null, null, null, null, null, 'displayName', 'ASC', true)
          .subscribe((data: any) => {
            this.clientsData = data.pageItems;
          });
      }
    });
  }

  /**
   * Add client.
   */
  data: any;
  addClient() {
    if (!this.clientMembers.includes(this.clientChoice.value)) {
      this.data = { clientMembers: [this.clientChoice.value.id] };
      this.groupsService.activateOrGenerateCollectionSheet(this.groupData.id, this.data, 'associateClients')
        .subscribe(() => { this.clientMembers.push(this.clientChoice.value); });
    }
  }

  /**
   * Remove client.
   * @param {number} index Client's array index.
   * @param {any} client Client
   */
  removeClient(index: number, client: any) {
    const removeMemberDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `client member: ${client.displayName}` }
    });
    removeMemberDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.data = { clientMembers: [client.id] };
        this.groupsService.activateOrGenerateCollectionSheet(this.groupData.id, this.data, 'disassociateClients')
          .subscribe(() => { this.clientMembers.splice(index, 1); });
      }
    });
  }

  /**
   * Displays Client name in form control input.
   * @param {any} client Client data.
   * @returns {string} Client name if valid otherwise undefined.
   */
  displayClient(client: any): string | undefined {
    return client ? client.displayName : undefined;
  }

}

/** Angular Imports */
import { Component, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

/** Custom Dialogs */
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';

/** Custom Services */
// import { CentersService } from 'app/centers/centers.service';
// import { GroupsService } from 'app/groups/groups.service';
import { MatDialog } from '@angular/material/dialog';

import { CentersService, GroupsService } from '@fineract/client';

@Component({
  selector: 'mifosx-manage-groups',
  templateUrl: './manage-groups.component.html',
  styleUrls: ['./manage-groups.component.scss']
})
export class ManageGroupsComponent implements AfterViewInit {

  /** Center Data */
  centerData: any;
  /** Group data. */
  groupsData: any = [];
  /** Group Members. */
  groupMembers: any[] = [];
  /** GroupChoice. */
  groupChoice = new FormControl('');

  /**
   * Fetches center action data from `resolve`
   * @param {ActivatedRoute} route Activated Route
   * @param {CentersService} centersService Centers Service
   * @param {GroupsService} groupsService Groups Service
   * @param {MatDialog} dialog Mat Dialog
   */
  constructor(private route: ActivatedRoute,
              private centersService: CentersService,
              private groupsService: GroupsService,
              public dialog: MatDialog) {
    this.route.data.subscribe((data: { centersActionData: any }) => {
      this.centerData = data.centersActionData;
      this.groupMembers = data.centersActionData.groupMembers;
    });
  }


  /**
   * Subscribes to Groups search filter:
   */
  ngAfterViewInit() {
    this.groupChoice.valueChanges.subscribe( (value: string) => {
      if (value.length >= 2) {
        this.groupsService.retrieveAll24( this.centerData.officeId,undefined,undefined,value,undefined,undefined,undefined,undefined,'name', 'ASC',true)
          .subscribe((data: any) => {
            this.groupsData = data;
          });
      }
    });
  }

  /**
   * Add group.
   */
  data:any;
  addGroup() {
    if (this.groupMembers !== null && this.groupMembers !== undefined) {
      if (!this.groupMembers.includes(this.groupChoice.value)) {
        this.data={groupMembers: [this.groupChoice.value.id]};
        this.centersService.activate2(this.centerData.id,this.data, 'associateGroups')
          .subscribe(() => { this.groupMembers.push(this.groupChoice.value); });
      }
    } else {
      this.data={groupMembers: [this.groupChoice.value.id]};
      this.centersService.activate2(this.centerData.id,this.data, 'associateGroups', )
      .subscribe(() => { this.groupMembers.push(this.groupChoice.value); });
    }
  }

  /**
   * Remove group.
   * @param index Group's array index.
   */
  removeGroup(index: number, group: any) {
    const removeMemberDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `group member: ${group.name}` }
    });
    removeMemberDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.data={groupMembers: [group.id]};
        this.centersService.activate2(this.centerData.id, this.data,'disassociateGroups')
          .subscribe(() => { this.groupMembers.splice(index, 1); });
      }
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

}

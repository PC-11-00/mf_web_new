/** Angular Imports */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Components */
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';

/** Custom Services */
import { ClientsService } from '../../clients.service';
import { ClientFamilyMemberService } from '@fineract/client';

/**
 * Client Family Members Tab
 */
@Component({
  selector: 'mifosx-family-members-tab',
  templateUrl: './family-members-tab.component.html',
  styleUrls: ['./family-members-tab.component.scss']
})
export class FamilyMembersTabComponent {

  /** Client Family Members */
  clientFamilyMembers: any;

  /**
   * @param {ActivatedRoute} route Activated Route
   * @param {ClientsService} clientsService Clients Service
   * @param {MatDialog }dialog Mat Dialog
   */
  constructor(private route: ActivatedRoute,
              private clientsService: ClientFamilyMemberService,
              public dialog: MatDialog) {
    this.route.data.subscribe((data: { clientFamilyMembers: any }) => {
      this.clientFamilyMembers = data.clientFamilyMembers;
    });
  }

  /**
   * Deletes the family member and redirects to family members tab.
   */
  deleteFamilyMember(clientId: any, id: any, name: string, index: number) {
    const deleteFamilyMemberDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `Family member id:${id} name : ${name} ${index}` }
    });
    deleteFamilyMemberDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.clientsService.deleteClientFamilyMembers(id,clientId)
          .subscribe(() => {
            this.clientFamilyMembers.splice(index, 1);
          });
      }
    });
  }

}

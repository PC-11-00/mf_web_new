/** Angular Imports. */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Services. */
import { OrganizationService } from 'app/organization/organization.service';

/** Custom Components. */
import { ConfirmationDialogComponent } from '../../../shared/confirmation-dialog/confirmation-dialog.component';
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';
import { HolidaysService } from '@fineract/client';

/**
 * View Holidays component.
 */
@Component({
  selector: 'mifosx-view-holidays',
  templateUrl: './view-holidays.component.html',
  styleUrls: ['./view-holidays.component.scss']
})
export class ViewHolidaysComponent {

  /** Holiday data. */
  holidayData: any;

  /**
   * Retrieves hioliday data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private holidaysService: HolidaysService) {
    this.route.data.subscribe((data: { holidays: any }) => {
      this.holidayData = data.holidays;
    });
  }

  /**
   * Deletes the holiday.
   */
  deleteHoliday() {
    const deleteHolidayDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `holiday ${this.holidayData.id}` }
    });
    deleteHolidayDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.holidaysService.delete7(this.holidayData.id)
          .subscribe(() => {
            this.router.navigate(['../'], { relativeTo: this.route });
          });
      }
    });
  }

  /**
   * Activate holiday.
   */
  activateHoliday() {
    const unAssignStaffDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { heading: 'Holiday', dialogContext: `Are you sure you want to activate ${this.holidayData.name} holiday` }
    });
    unAssignStaffDialogRef.afterClosed().subscribe((response: { confirm: any }) => {
      if (response.confirm) {
        this.holidaysService.handleCommands1(this.holidayData.id,this.holidayData,'activate')
          .subscribe(() => {
            this.router.navigate(['/organization/holidays']);
          });
      }
    });
  }

}

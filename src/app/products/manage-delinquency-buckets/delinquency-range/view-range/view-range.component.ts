import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'app/products/products.service';
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { DelinquencyRangeAndBucketsManagementService } from '@fineract/client';

@Component({
  selector: 'mifosx-view-range',
  templateUrl: './view-range.component.html',
  styleUrls: ['./view-range.component.scss']
})
export class ViewRangeComponent implements OnInit {

  /** Delinquency Range Data. */
  delinquencyRangeData: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private delinquencyRangeAndBucketsManagementService: DelinquencyRangeAndBucketsManagementService) {
    this.route.data.subscribe((data: { delinquencyRange: any }) => {
      this.delinquencyRangeData = data.delinquencyRange;
    });
  }

  ngOnInit(): void {
  }

  deleteDelinquencyRange() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: this.delinquencyRangeData.classification }
    });
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.delinquencyRangeAndBucketsManagementService.deleteDelinquencyRange(this.delinquencyRangeData.id,this.delinquencyRangeData).subscribe(() => {
          this.router.navigate(['../'], { relativeTo: this.route });
        });
      }
    });
  }

}

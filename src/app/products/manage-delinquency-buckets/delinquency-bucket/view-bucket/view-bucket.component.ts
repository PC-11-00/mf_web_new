import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'app/products/products.service';
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { DelinquencyRangeAndBucketsManagementService } from 'openapi/typescript_files';

@Component({
  selector: 'mifosx-view-bucket',
  templateUrl: './view-bucket.component.html',
  styleUrls: ['./view-bucket.component.scss']
})
export class ViewBucketComponent implements OnInit {

  /** Delinquency Bucket Data. */
  delinquencyBucketData: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private productsService: DelinquencyRangeAndBucketsManagementService) {
    this.route.data.subscribe((data: { delinquencyBucket: any }) => {
      this.delinquencyBucketData = data.delinquencyBucket;
      this.delinquencyBucketData.ranges = this.delinquencyBucketData.ranges.sort(
        (objA: { minimumAge: number; }, objB: { minimumAge: number; }) => objA.minimumAge - objB.minimumAge,
      );
    });
  }

  ngOnInit(): void {
  }

  deleteDelinquencyBucket() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: this.delinquencyBucketData.name }
    });
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.productsService.deleteDelinquencyBucket(this.delinquencyBucketData.id,this.delinquencyBucketData.name).subscribe(() => {
          this.router.navigate(['../'], { relativeTo: this.route });
        });
      }
    });
  }

}

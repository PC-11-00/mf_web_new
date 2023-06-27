import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { SystemService } from '../system.service';
import { LoanCOBCatchUpService } from '@fineract/client';

@Component({
  selector: 'mifosx-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.scss']
})
export class ManageJobsComponent implements OnInit {
  /** Process running flag */
  isCatchUpRunning = true;

  constructor(private loanCOBCatchUpService: LoanCOBCatchUpService) { }

  ngOnInit(): void {
  }

  onJobTabChange(event: MatTabChangeEvent) {
    if (event.index === 2) {
      this.loanCOBCatchUpService.isCatchUpRunning().subscribe((response: any) => {
        this.isCatchUpRunning = response.isCatchUpRunning;
      });
    }
  }

}

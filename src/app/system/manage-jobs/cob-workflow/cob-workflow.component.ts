import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SystemService } from 'app/system/system.service';
import { LoanCOBCatchUpService } from 'openapi/typescript_files';

@Component({
  selector: 'mifosx-cob-workflow',
  templateUrl: './cob-workflow.component.html',
  styleUrls: ['./cob-workflow.component.scss']
})
export class CobWorkflowComponent implements OnInit, OnDestroy {
  /** Wait time between API status calls 30 seg */
  waitTime = 30000;
  /** Process running flag */
  @Input() isCatchUpRunning = true;
  /** Timer to refetch COB Catch-Up status every 5 seconds */
  timer: any;

  constructor(private loanCOBCatchUpService: LoanCOBCatchUpService) { }

  ngOnInit(): void {
    setTimeout(() => { this.getCOBCatchUpStatus(); }, this.waitTime);
    this.getCOBCatchUpStatus();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  getCOBCatchUpStatus(): void {
    this.loanCOBCatchUpService.getOldestCOBProcessedLoan().subscribe((response: any) => {
      this.isCatchUpRunning = response.isCatchUpRunning;
      if (!this.isCatchUpRunning) {
        this.waitTime = 30000;
      }
    });
    this.timer = setTimeout(() => { this.getCOBCatchUpStatus(); }, this.waitTime);
  }

  runCatchUp(): void {
    this.loanCOBCatchUpService.executeLoanCOBCatchUp().subscribe((response: any) => {
      this.isCatchUpRunning = true;
      this.waitTime = 5000;
    });
  }

}

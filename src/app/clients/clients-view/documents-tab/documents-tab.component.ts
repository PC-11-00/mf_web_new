import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Services */
import { ClientsService } from '../../clients.service';
import { DocumentsService } from 'openapi/typescript_files';

@Component({
  selector: 'mifosx-documents-tab',
  templateUrl: './documents-tab.component.html',
  styleUrls: ['./documents-tab.component.scss']
})
export class DocumentsTabComponent implements OnInit {
  entityDocuments: any;
  entityId: any;
  entityType = 'clients';

  constructor(private route: ActivatedRoute,
    private clientsService: DocumentsService,
    public dialog: MatDialog) {
    this.route.data.subscribe((data: { clientDocuments: any }) => {
      this.entityDocuments = data.clientDocuments;
    });
    this.entityId = this.route.parent.snapshot.paramMap.get('clientId');
  }

  ngOnInit() {
  }

  downloadDocument(documentId: any) {
    this.clientsService.downloadFile(this.entityType,this.entityId, documentId).subscribe(res => {
      const url = window.URL.createObjectURL(res);
      window.open(url);
    });
  }

  deleteDocument(documentId: any) {
    this.clientsService.deleteDocument(this.entityType,this.entityId, documentId).subscribe(res => {});
  }

  uploadDocument(formData: any) {
    return this.clientsService.createDocument(this.entityType,this.entityId, formData);
  }

}

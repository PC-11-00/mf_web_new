/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/** Custom Components */

/** Custom Services */
import { ClientsService } from '../../clients.service';
import { AuthenticationService } from 'app/core/authentication/authentication.service';
import { NotesService } from 'openapi/typescript_files';

/**
 * Notes Tab Component
 */
@Component({
  selector: 'mifosx-notes-tab',
  templateUrl: './notes-tab.component.html',
  styleUrls: ['./notes-tab.component.scss']
})
export class NotesTabComponent implements OnInit {

  /** Client ID */
  entityId: any;
  /** Username */
  username: string;
  /** Client Notes */
  entityNotes: any;

  /**
   * @param {ActivatedRoute} route Activated Route
   * @param {ClientsService} clientsService Clients Service
   * @param {AuthenticationService} authenticationService Authentication Service
   */
  constructor(private route: ActivatedRoute,
              private clientsService: NotesService,
              private authenticationService: AuthenticationService) {
    const credentials = this.authenticationService.getCredentials();
    this.username = credentials.username;
    this.entityId = this.route.parent.snapshot.params['clientId'];
    this.route.data.subscribe((data: { clientNotes: any }) => {
      this.entityNotes = data.clientNotes;
    });
  }

  ngOnInit() { }

  /**
   * Edits a client note.
   * @param {string} noteId Note Id
   * @param {any} noteContent Note Content
   * @param {number} index Index
   */
  editNote(noteId: number, noteContent: any, index: number) {
    this.clientsService.updateNote('clients',this.entityId, noteId, noteContent).subscribe(() => {
      this.entityNotes[index].note = noteContent.note;
    });
  }

  /**
   * Deletes a client note.
   * @param {string} noteId Note Id
   * @param {number} index Index
   */
  deleteNote(noteId: number, index: number) {
    this.clientsService.deleteNote('clients',this.entityId, noteId)
      .subscribe(() => {
        this.entityNotes.splice(index, 1);
      });
  }

  /**
   * Creates a client note.
   */
  addNote(noteContent: any) {
    this.clientsService.addNewNote('clients',this.entityId, noteContent).subscribe((response: any) => {
      this.entityNotes.push({
        id: response.resourceId,
        createdByUsername: this.username,
        createdOn: new Date(),
        note: noteContent.note
      });
    });
  }

}

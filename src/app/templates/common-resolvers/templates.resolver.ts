/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { TemplatesService } from '../templates.service';
import { UserGeneratedDocumentsService } from 'openapi/typescript_files';

/**
 * Templates data resolver.
 */
@Injectable()
export class TemplatesResolver implements Resolve<Object> {

  /**
   * @param {TemplatesService} templatesService Templates service.
   */
  constructor(private userGeneratedDocumentsService: UserGeneratedDocumentsService) {}

  /**
   * Returns the templates data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.userGeneratedDocumentsService.retrieveAll40();
  }

}

/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { TemplatesService } from '../templates.service';
import { UserGeneratedDocumentsService } from '@fineract/client';

/**
 * Create Template data resolver.
 */
@Injectable()
export class CreateTemplateResolver implements Resolve<Object> {

  /**
   * @param {TemplatesService} templatesService Templates service.
   */
  constructor(private userGeneratedDocumentsService: UserGeneratedDocumentsService) {}

  /**
   * Returns the template data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.userGeneratedDocumentsService.template20();
  }

}

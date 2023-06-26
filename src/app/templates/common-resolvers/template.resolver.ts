/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { TemplatesService } from '../templates.service';
import { UserGeneratedDocumentsService } from 'openapi/typescript_files';

/**
 * Template data resolver.
 */
@Injectable()
export class TemplateResolver implements Resolve<Object> {

  /**
   * @param {TemplatesService} templatesService Templates service.
   */
  constructor(private userGeneratedDocumentsService: UserGeneratedDocumentsService) {}

  /**
   * Returns the Template data.
   * @returns {Observable<any>}
   */
  templateId:any;
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.templateId = route.paramMap.get('id');
    return this.userGeneratedDocumentsService.retrieveOne29(this.templateId);
  }

}

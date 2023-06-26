/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UsersService } from 'openapi/typescript_files';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
// import { UsersService } from './users.service';

/**
 * Users data resolver.
 */
@Injectable()
export class UsersResolver implements Resolve<Object> {

  /**
   * @param {UsersService} usersService Users service.
   */
  constructor(private usersService: UsersService) {}

  /**
   * Returns the users data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.usersService.retrieveAll41();
  }

}

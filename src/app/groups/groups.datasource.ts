/** Angular Imports */
import { CollectionViewer, DataSource } from '@angular/cdk/collections';

/** rxjs Imports */
import { Observable, BehaviorSubject } from 'rxjs';

/** Custom Services */
// import { GroupsService } from './groups.service';
import { GroupsService } from '@fineract/client';
/**
 * Groups custom data source to implement server side filtering, pagination and sorting.
 */
export class GroupsDataSource implements DataSource<any> {

  /** groups behavior subject to represent loaded groups page. */
  private groupsSubject = new BehaviorSubject<any[]>([]);
  /** Records subject to represent total number of filtered groups records. */
  private recordsSubject = new BehaviorSubject<number>(0);
  /** Records observable which can be subscribed to get the value of total number of filtered groups records. */
  public records$ = this.recordsSubject.asObservable();

  /**
   * @param {GroupsService} groupsService Groups Service
   */
  constructor(private groupsService: GroupsService) { }

  /**
   * Gets groups on the basis of provided parameters and emits the value.
   * @param {any} filterBy Properties by which entries should be filtered.
   * @param {string} orderBy Property by which entries should be sorted.
   * @param {string} sortOrder Sort order: ascending or descending.
   * @param {number} pageIndex Page number.
   * @param {number} limit Number of entries within the page.
   * @param {boolean} groupActive Specify whether to only filter active groups.
   */
  getGroups(name: any, orderBy: string = '', sortOrder: string = '', pageIndex: number = 0, limit: number = 10, groupActive: boolean = true) {
    this.groupsSubject.next([]);
    this.groupsService.retrieveAll24(null, null, null, name, null, true, pageIndex * limit, limit, orderBy, sortOrder, null)
      .subscribe((groups: any) => {
        groups.pageItems = (groupActive) ? (groups.pageItems.filter((group: any) => group.active)) : groups.pageItems;
        this.recordsSubject.next(groups.totalFilteredRecords);
        this.groupsSubject.next(groups.pageItems);
      });
  }

  /**
   * @param {CollectionViewer} collectionViewer
   */
  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.groupsSubject.asObservable();
  }

  /**
   * @param {CollectionViewer} collectionViewer
   */
  disconnect(collectionViewer: CollectionViewer): void {
    this.groupsSubject.complete();
    this.recordsSubject.complete();
  }

}

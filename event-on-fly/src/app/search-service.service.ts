import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { SearchRequest } from './search-request';
import { SearchResponse, Bundles } from './search-response';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class SearchServiceService {

  private basePath: string = '/bundles';

  bundles: FirebaseListObservable<Bundles[]> = null;

  public searchRequest: SearchRequest = new SearchRequest();

  constructor(private db: AngularFireDatabase) { 
  }

  getBundleList(query={}): FirebaseListObservable<Bundles[]> {
    // this.bundles = this.db.list(this.basePath, {
    //    query : query
    // });

    return this.bundles;
  }
}

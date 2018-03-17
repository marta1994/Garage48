import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SearchServiceService {

  private basePath: string = '/bundles';

  constructor(private db: AngularFireDatabase) { }

}

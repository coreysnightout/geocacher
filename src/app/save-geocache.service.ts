import { Injectable } from '@angular/core';
import { Geocache } from './geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SaveGeocacheService {
  geocachers: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.geocachers = database.list('geocachers');
    console.log(this.geocachers)
  }

  getGeocacher(){
    return this.geocachers;
  }

  addGeocache(newGeocache: Geocache) {
    this.geocachers.push(newGeocache);
  }
}

import { Injectable } from '@angular/core';
import { geoKey } from './api-keys';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Geocache } from './geocache.model';
// import { SaveGeocacheService } from './save-geocache.service';

@Injectable()
export class GeocacheService {

  constructor(private http: Http) { }

  getPhysicalAddress(lat: string, lng: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey);
      // console.log(response.json());
      // console.log(foundGeocache);
    };
}


// .subscribe(response => {
//   let foundGeocache: Geocache;
//   for(let item of response.json().results) {
//     foundGeocache = new Geocache(item.long_name);
//     this.saveGeocacheService.addGeocache(foundGeocache);
//   }











// @Injectable()
// export class GeocacheService {
//   geocaches: FirebaseListObservable<any[]>;
//
//   constructor(private http: Http) { }
//
// }

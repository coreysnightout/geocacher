import { Component, OnInit } from '@angular/core';
import { SaveGeocacheService } from '../save-geocache.service';
import { Geocache } from '../geocache.model';
import { GeocacheService } from '../geocache.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-new-geocache',
  templateUrl: './new-geocache.component.html',
  styleUrls: ['./new-geocache.component.css'],
})
export class NewGeocacheComponent implements OnInit {
   geocaches: FirebaseListObservable<any[]>;

  constructor(private router: Router, private saveGeocacheService: SaveGeocacheService, private geoCacheService: GeocacheService) { }

  ngOnInit() {
  }

  submitForm(name: string, lat: string, lng: string, address: string) {
    this.geoCacheService.getPhysicalAddress(lat, lng).subscribe((response) =>{
      var newAddress = response.json().results[0].formatted_address;
      var foundGeocache = new Geocache(name, lat, lng, newAddress);
      this.saveGeocacheService.addGeocache(foundGeocache);
    })






    // var newGeocache: Geocache = new Geocache(name, lat, lng, address);
    // this.saveProductService.addGeocache(newGeocache);
    // console.log(newGeocache);
  }

}


// goToDetailPage(clickedGeocache: Geocache) {
//   this.router.navigate(['geocaches/' + clickedGeocache.lat]);
// };

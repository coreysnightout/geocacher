import { Component, OnInit } from '@angular/core';
import { SaveGeocacheService } from '../save-geocache.service';
import { Geocache } from '../geocache.model';
import { GeocacheService } from '../geocache.service';

@Component({
  selector: 'app-new-geocache',
  templateUrl: './new-geocache.component.html',
  styleUrls: ['./new-geocache.component.css'],
  providers: [SaveGeocacheService]
})
export class NewGeocacheComponent implements OnInit {

  constructor(private saveProductService: SaveGeocacheService) { }

  ngOnInit() {
  }

  submitForm(name: string, lat: string, lng: string, address: string) {
    var newGeocache: Geocache = new Geocache(name, lat, lng, address);
    this.saveProductService.addGeocache(newGeocache);
    console.log(newGeocache);
  }
}

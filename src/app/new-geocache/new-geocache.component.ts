import { Component, OnInit } from '@angular/core';
import { SaveGeocacheService } from '../save-geocache.service';
import { Geocache } from '../geocache.model';

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

  submitForm(name: string) {
    var newGeocache: Geocache = new Geocache(name);
    this.saveProductService.addGeocache(newGeocache);
  }
}

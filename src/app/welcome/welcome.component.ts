import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Geocache } from '../geocache.model';
import { Router } from '@angular/router';
import { SaveGeocacheService } from '../save-geocache.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  caches = null;

  constructor(private saveGeocacheService: SaveGeocacheService) { }

  ngOnInit() {
    this.caches = this.saveGeocacheService.getGeocacher();
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { GeocacheService } from './geocache.service';
import { SaveGeocacheService } from './save-geocache.service';

//firebase
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewGeocacheComponent } from './new-geocache/new-geocache.component';
import { GeocacheDetailComponent } from './geocache-detail/geocache-detail.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NewGeocacheComponent,
    GeocacheDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(masterFirebaseConfig), //master?//
    AngularFireDatabaseModule
  ],
  providers: [GeocacheService, SaveGeocacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }

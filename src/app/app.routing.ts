import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewGeocacheComponent } from './new-geocache/new-geocache.component';

const appRoutes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path:'new-geocache',
    component: NewGeocacheComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

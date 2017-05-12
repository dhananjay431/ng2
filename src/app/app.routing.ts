import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { AppShow } from './app.show';

const routes: Routes = [
  { 
  	path: '', 
  	component:MainComponent,
  },
  { 
  	path: 'show', 
  	component:AppShow,
  },
  
];

export const routing : ModuleWithProviders=RouterModule.forRoot(routes);

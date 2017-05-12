import { Component } from '@angular/core';
import { PostsService } from './posts.services';
 import { AppShow } from './app.show';
 import { MainComponent } from './main.component';
 
@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
providers: [ PostsService ]
})
export class AppComponent  { 
}
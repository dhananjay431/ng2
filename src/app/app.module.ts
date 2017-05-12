import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { PostsService } from './posts.services';
import { AppShow } from './app.show';
import { MainComponent } from './main.component';
import { routing } from './app.routing';
@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,routing],
  declarations: [ AppComponent ,AppShow,MainComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}

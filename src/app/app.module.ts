import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { HeaderComponent } from './common/header/header.component';
import { LoaderComponent } from './common/loader/loader.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    LoaderComponent,
    UserComponent,
    
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

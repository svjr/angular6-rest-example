import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes'

import {MaterialService} from './materials/material.service';
import { AppComponent } from './app.component';
import { MaterialsComponent } from './materials/materials.component';
import { HomeComponent } from './home/home.component';
import { MaterialComponent } from './materials/material/material.component';
import { MatTableModule } from '@angular/material';
import { MatInputModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    BrowserModule,
    MatTableModule,
    MatInputModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    MaterialsComponent,
    HomeComponent,
    MaterialComponent,
  ],
  
  providers: [MaterialService],
  bootstrap: [AppComponent]
})
export class AppModule { }

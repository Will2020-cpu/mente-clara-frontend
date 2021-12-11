import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ArtComponent } from './components/art/art.component';
import { FormArticuloComponent } from './components/form-articulo/form-articulo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleModalModule } from 'ngx-simple-modal';
import {MediaComponent } from './components/media/media.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticuloComponent,
    ArtComponent,
    FormArticuloComponent,
    MediaComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SimpleModalModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

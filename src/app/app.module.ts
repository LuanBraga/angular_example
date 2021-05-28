import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { MeuOutroComponenteComponent } from './meu-outro-componente/meu-outro-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    MeuOutroComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

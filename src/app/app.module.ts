import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

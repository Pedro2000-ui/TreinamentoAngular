import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegiaoComponent } from './regiao/regiao.component';
import { InforegiaoComponent } from './inforegiao/inforegiao.component';

import { HttpClientModule } from '@angular/common/http';
import { RegiaoService } from './services/regiao.service';

@NgModule({
  declarations: [
    AppComponent,
    RegiaoComponent,
    InforegiaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RegiaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { HeroService } from './core/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';

FusionChartsModule.fcRoot(FusionCharts, Charts)

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FusionChartsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    StocklistComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

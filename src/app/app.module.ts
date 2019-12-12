import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { review } from './review/review.compoment';

@NgModule({
  declarations: [
    AppComponent,
    review,
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

    
  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { PromiseComponent } from './components/promise/promise.component';
import { AsyncAwaitComponent } from './components/async-await/async-await.component';
import { ListComponent } from './components/list/list.component';
import { FromeventComponent } from './components/list/fromevent/fromevent.component';
import { IntervalComponent } from './components/list/interval/interval.component';
import { OfFromComponent } from './components/list/of-from/of-from.component';
import { ToArrayComponent } from './components/list/to-array/to-array.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PromiseComponent,
    AsyncAwaitComponent,
    ListComponent,
    FromeventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

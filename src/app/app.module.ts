import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './shared/shared.module';
import {BasicLayoutComponent} from './layouts/basic-layout/basic-layout.component';
import {FullLayoutComponent} from './layouts/full-layout/full-layout.component';
import { ClearLayoutComponent } from './layouts/clear-layout/clear-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicLayoutComponent,
    FullLayoutComponent,
    ClearLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

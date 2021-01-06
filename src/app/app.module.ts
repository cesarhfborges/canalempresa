import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './shared/shared.module';
import {BasicLayoutComponent} from './layouts/basic-layout/basic-layout.component';
import {FullLayoutComponent} from './layouts/full-layout/full-layout.component';
import {ClearLayoutComponent} from './layouts/clear-layout/clear-layout.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

const config = {
  apiKey: 'AIzaSyCHwzC4_xxIOIZFbFuddNi7DxVLFvw4dNc',
  authDomain: 'canalempresa-1d15f.firebaseapp.com',
  databaseURL: 'https://canalempresa-1d15f-default-rtdb.firebaseio.com',
  projectId: 'canalempresa-1d15f',
  storageBucket: 'canalempresa-1d15f.appspot.com',
  messagingSenderId: '712721579407',
  appId: '1:712721579407:web:bc14d8ec399f64cba21ffa',
  measurementId: 'G-4QDG2KC6DG'
};

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
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

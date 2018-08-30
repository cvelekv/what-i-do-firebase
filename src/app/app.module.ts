import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCNGEdT5WWHEbFGxRuFdayiziZRHzT1xXM",
  authDomain: "what-i-do-348bb.firebaseapp.com",
  databaseURL: "https://what-i-do-348bb.firebaseio.com",
  projectId: "what-i-do-348bb",
  storageBucket: "",
  messagingSenderId: "827402145320"
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule {}

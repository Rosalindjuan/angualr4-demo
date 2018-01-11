import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {DeviceIndexComponent} from "./index/device-index.component";
import {FooterComponent} from "./footer/footer.component";
import {UserIndexComponent} from "./user/user-index.component";
import {UserMsgComponent} from "./user/user-msg.component";
import {HomeComponent} from "./home/home";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DeviceIndexComponent,
    UserIndexComponent,
    UserMsgComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {NetRoutingModule} from "./net-routing.module";
import {NetComponent} from "./net.component";

@NgModule({
  imports: [
    CommonModule,
    NetRoutingModule
  ],
  declarations: [
    NetComponent
  ],
})

export class NetModule {}

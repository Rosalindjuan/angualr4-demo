import { NgModule }                      from '@angular/core';
import { RouterModule, Routes }          from '@angular/router';
import {NetComponent} from "./net.component";

const orderRoutes: Routes = [
  {path: '', component: NetComponent, data: {title: '滤网'}},
];

@NgModule({
  imports: [
    RouterModule.forChild(orderRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class NetRoutingModule {}

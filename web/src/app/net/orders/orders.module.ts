import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrdersComponent} from "./orders.component";
import {OrdersRoutingModule} from "./orders-routing.module";
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {OrderService} from "../../service/order.service";
import {OrderDetailComponent} from "./order-detail.component";

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    InfiniteScrollModule
  ],
  declarations: [
    OrdersComponent,
    OrderDetailComponent
  ],
  providers: [OrderService]
})

export class OrdersModule {}

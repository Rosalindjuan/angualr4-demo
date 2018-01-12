import { NgModule }                      from '@angular/core';
import { RouterModule, Routes }          from '@angular/router';
import {OrdersComponent} from "./orders.component";
import {OrderDetailComponent} from "./order-detail.component";

const orderRoutes: Routes = [
  {path: '', component: OrdersComponent, data: {title: '订单列表'}},
  {path: ':id', component: OrderDetailComponent, data: {title: '订单详情'}},
];

@NgModule({
  imports: [
    RouterModule.forChild(orderRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class OrdersRoutingModule {}

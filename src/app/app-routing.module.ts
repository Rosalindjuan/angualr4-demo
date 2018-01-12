import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {DeviceIndexComponent} from "./index/device-index.component";
import {UserIndexComponent} from "./user/user-index.component";
// import {OrdersModule} from "./net/orders/orders.module";
// import {ShoppingModule} from "./net/shopping/shopping.module";

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: DeviceIndexComponent, data: {title: '我的设备'}},
  {path: 'user', component: UserIndexComponent, data: {title: '用户中心'}},
  {path: 'user_msg', loadChildren: './user/user-msg/user-msg.module#UserMsgModule'},
  {path: 'notice', loadChildren: './user/notice/notice.module#NoticeModule'},
  {path: 'contact', loadChildren: './user/contact-us/contact-us.module#ContactUsModule'},
  {path: 'net', loadChildren: './net/net.module#NetModule'},
  {path: 'orders', loadChildren: './net/orders/orders.module#OrdersModule'},
  {path: 'shopping', loadChildren: './net/shopping/shopping.module#ShoppingModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

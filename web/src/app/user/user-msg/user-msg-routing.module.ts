import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserMsgComponent} from "./user-msg.component";

const orderRoutes: Routes = [
  {path: '', component: UserMsgComponent, data: {title: '个人信息'}},
];

@NgModule({
  imports: [
    RouterModule.forChild(orderRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class UserMsgRoutingModule {
}

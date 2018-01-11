import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {DeviceIndexComponent} from "./index/device-index.component";
import {UserIndexComponent} from "./user/user-index.component";
import {UserMsgComponent} from "./user/user-msg.component";
import {HomeComponent} from "./home/home";



const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: DeviceIndexComponent, data: {title: '我的设备'}},
  {path: 'user', component: UserIndexComponent, data: {title: '用户中心'}},
  // {path: 'user_msg', component: UserMsgComponent, data: {title: '个人信息'}},
  // {path: 'dashboard', component: DashboardComponent},
  // {path: 'detail/:id', component: HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

import { NgModule }                      from '@angular/core';
import { CommonModule }                  from '@angular/common';
import { UserMsgRoutingModule }          from './user-msg-routing.module';
import { UserMsgComponent }              from "./user-msg.component";

@NgModule({
  imports: [
      CommonModule,
      UserMsgRoutingModule
  ],
  declarations: [
      UserMsgComponent
  ],
})
export class UserMsgModule {}

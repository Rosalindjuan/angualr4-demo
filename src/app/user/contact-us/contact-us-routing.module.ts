import { NgModule }                      from '@angular/core';
import { RouterModule, Routes }          from '@angular/router';
import {ContactUsComponent}              from "./contact-us.component";

const orderRoutes: Routes = [
    { path: '', component: ContactUsComponent, data: {title: '联系兆晶'} },
];

@NgModule({
  imports: [
    RouterModule.forChild(orderRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class ContactUsRoutingModule {}

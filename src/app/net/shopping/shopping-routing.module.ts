import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SettlementComponent} from './settlement.component';
import {ShoppingComponent} from './shopping.component';
import {PaySuccessComponent} from './pay-success.component';
import {PartsService} from "../../service/parts.service";

// import { SettlementResolve }             from './settlement-resolve.service';


const shoppingRoutes: Routes = [
  {path: '', component: ShoppingComponent, data: {title: '购买滤网'}},
  {path: 'settlement', component: SettlementComponent, data: {title: '结算'}},
  {path: 'success', component: PaySuccessComponent, data: {title: '支付成功'}},
];

@NgModule({
  imports: [
    RouterModule.forChild(shoppingRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [PartsService]
})
export class ShoppingRoutingModule {
}

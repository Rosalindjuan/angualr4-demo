import { NgModule }                      from '@angular/core';
import { CommonModule }                  from '@angular/common';
import { FormsModule }                   from '@angular/forms';
import { InfiniteScrollModule }          from 'angular2-infinite-scroll';


import { SettlementComponent }           from './settlement.component';
import { ShoppingComponent }             from './shopping.component';
import { PaySuccessComponent }           from './pay-success.component';

import { ShoppingRoutingModule }         from './shopping-routing.module';

// import { SettlementResolve }             from './settlement-resolve.service';

@NgModule({
  imports: [
      CommonModule,
      ShoppingRoutingModule,
      FormsModule,
      InfiniteScrollModule
  ],
  declarations: [
      SettlementComponent,
      ShoppingComponent,
      PaySuccessComponent
  ],
    providers: []
})
export class ShoppingModule {}

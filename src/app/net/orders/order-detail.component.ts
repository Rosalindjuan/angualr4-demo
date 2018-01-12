import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {Order, OrderService} from "../../service/order.service";


@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['orders.component.css', 'order-detail.component.css']
})

export class OrderDetailComponent implements OnInit {
  orderId = '';
  order: Order;
  delete_prompt = false;

  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getUrl()
    this.order = this.orderService.getOrder(this.orderId);
  }

  getUrl() {
    this.route.paramMap
      .switchMap((params: ParamMap) => params.get('id'))
      .subscribe(id => this.orderId = id);
  }

  // 订单付款
  payOrder() {
  }

  // 删除订单
  deleteOrder() {
    let flag = this.orderService.deleteOrder(this.orderId);
    if (flag) {
      this.delete_prompt = true
      setTimeout(() => {
        this.location.back();
      }, 300);
    }
  }
}

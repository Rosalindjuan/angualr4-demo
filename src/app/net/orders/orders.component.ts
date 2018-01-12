import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// import { Cookie }                     from 'ng2-cookies';
//
// import { WePageTitleService }         from "../service/we-page-title.service";
// import { GetHttpService }             from "../service/get-http.service";
import {Order, OrderService} from "../../service/order.service";
// import { SocketService }              from '../service/socket.service';
// import { PERROUTE }                   from "../service/get-http.service";


@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['orders.component.css']
})

export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  sum = 0; // 显示的个数 首次显示10个
  loadmore = true; // 正在下载显示
  noData = false; // 没有数据

  constructor(private orderService:OrderService) {}

  ngOnInit(): void {
    // 获取数据
    this.getData(this.orderService.getOrders());
  }

  //
  // onScrollDown() {
  //   if(!this.noData) {
  //     if(document.body.scrollTop + document.body.clientHeight >= (document.body.scrollHeight - 5)) {
  //       if(!this.loadmore) {
  //         this.loadmore = true;
  //         this.getData()
  //       }
  //     }
  //   }
  // }
  //
  // 获取数据
  getData(data_orders) {
    let len = data_orders.length
    if (!len) {
      this.noData = true;
      this.loadmore = false;
    } else {
      this.sum += len;
      this.loadmore = false;
      for (let i = 0; i < len; i++) {
        this.orders.push(data_orders[i]);
      }
    }
  }

  //
  // // 如果是微信的话,去掉padding-top
  // tabPaddingTop() {
  //   return !this.wePageTitleService.getTitle().pageTitle;
  // }
  //
  // // 订单详情页
  // linkDetail(id:string){
  //   Cookie.set('order_id',id);
  //   this.router.navigateByUrl(PERROUTE+"/order/detail/");
  // }
}

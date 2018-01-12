import {Injectable} from '@angular/core';
import {Part} from "./parts.service";

// 收货信息
export class Consignee {
  name: string;
  phone: string;
  city: string;
  full: string;
}

// 订单类型
export class Order {
  id: string;
  status: number;
  details: Part[];
  freight: string;
  quantity: number;
  total: any;
  message: string;
  time: string;
  contact: Consignee;
}

function setOrder(id) {
  let details = [];
  details.push({
    name: '配件1', url: 'http://p06blazdg.bkt.clouddn.com/20171208_5a29fdec4b0cc.png',
    price: 300,
    quantity: 1, total: 300
  });
  let address = '广东省广州市/asldkfjalsdkfjasdkjf/13580467147';
  let addressArr = address.split("/");
  let contact = {name: 'zhangjuan', phone: addressArr[2], city: addressArr[0], full: addressArr[1]};
  let data = {
    id: id, status: 0, quantity: 12, total: 120,
    freight: 'asdfasdf', details: details, time: '2017-10-12 12:45',
    message: '', contact: contact
  };
  return data;
}

export const ORDERS: Order[] = [setOrder('1'),setOrder('2')];

@Injectable()
export class OrderService {

  // 所有订单
  getOrders(): Order[] {
    console.log(ORDERS)
    return ORDERS;
  }
  getOrder(id: string): Order {
    return this.getOrders().find(order => order.id === id);
  }

  // setOrder(order: Order) {
  //   this.getOrders().push({
  //     id: order.id,
  //     status: order.status,
  //     details: order.details,
  //     freight: order.freight,
  //     quantity: order.quantity,
  //     total: order.total,
  //     message: order.message,
  //     time: order.time,
  //     contact: order.contact
  //   });
  // }
  //
  // findOrder(id: string) {
  //   return this.getOrders().find(order => order.id == id);
  // }
  //
  deleteOrder(id: string) {
    let order: Order = this.getOrder(id);
    this.getOrders().splice(this.getOrders().indexOf(order), 1);
    return true;
  }
}

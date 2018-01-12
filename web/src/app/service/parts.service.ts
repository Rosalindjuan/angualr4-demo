import {Injectable} from '@angular/core';

export class Part {
  id: string;
  url: string;
  name: string;
  quantity: any;
  price: any;
  total: any;
}

// 配件
export const PARTS: Part[] = [
  {id: '111', url: 'http://p06blazdg.bkt.clouddn.com/20171208_5a29fdec4b0cc.png', name: '配件1', quantity: 0, price: 10, total: 0 },
  {id: '222', url: 'http://p06blazdg.bkt.clouddn.com/20171208_5a29fdec4b0cc.png', name: '配件2', quantity: 0, price: 20, total: 0 },
  {id: '333', url: 'http://p06blazdg.bkt.clouddn.com/20171208_5a29fdec4b0cc.png', name: '配件3', quantity: 0, price: 30, total: 0 },
  {id: '444', url: 'http://p06blazdg.bkt.clouddn.com/20171208_5a29fdec4b0cc.png', name: '配件4', quantity: 0, price: 40, total: 0 },
  {id: '555', url: 'http://p06blazdg.bkt.clouddn.com/20171208_5a29fdec4b0cc.png', name: '配件5', quantity: 0, price: 50, total: 0 },
]

// 购物车
export const CARTS: Part[] = []

@Injectable()
export class PartsService {
  getParts(): Part[] {
    return PARTS;
  }

  // 购物车
  getCarts(): Part[] {
    return CARTS;
  }
  // 查找购物车的配件
  findCart(id: string): Part {
    return this.getCarts().find(item => item.id === id)
  }

  // 删除购物车里面的配件
  deleteCart(id: string) {
    this.getCarts().splice(this.getCarts().indexOf(this.findCart(id)),1)
  }

  // 更新购物车信息
  updateCart(id: string, part: Part) {
    let item = this.findCart(id);
    item.id = part.id;
    item.name = part.name;
    item.price = part.price;
    item.quantity = part.quantity;
    item.total = parseFloat((part.quantity * part.price).toFixed(2));
  }
  // 创建购物车里面的一条信息
  setCart(part: Part) {
    this.getCarts().push({
      id: part.id,
      url: part.url,
      name: part.name,
      quantity: part.quantity,
      price: part.price,
      total: part.quantity * part.price
    });
  }

  cartAmount() {
    let total = 0;
    let count = 0;
    this.getCarts().forEach(item => {
      total = parseFloat((total + item.total).toFixed(2));
      count += item.quantity;
    });
    return {total: total, count: count};
  }

  cleanCart() {
    CARTS = [];
  }
}

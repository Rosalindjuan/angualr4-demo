import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Part, PartsService} from "../../service/parts.service";


@Component({
  moduleId: module.id,
  selector: 'shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['shopping.component.css'],
})

export class ShoppingComponent implements OnInit {
  warning = false;   // 购物车清空,提示
  searchParts: Part[] = [];  // 搜索结果配件
  searchResult = false;     // 是否有搜索结果
  searchContent: string;    // 搜索条件/内容
  parts: Part[] = [];   // 配件列表信息
  slide = false; // 控制购物车动画
  slideShow = false; // 控制购物车显示
  nullShow = false; // 购物车为空时,提示
  cartMsg = {count: 0, total: 0};  // 购物车合计信息,总数量,价格合计
  carts: Part[];   // 购物车具体内容
  sum = 0; // 显示的个数 首次显示10个

  searchInput = false;
  loadmore = true;
  noData = false; // 没有数据

  constructor(private partsService: PartsService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.carts = this.partsService.getCarts()
    this.getData();
        this.carts = this.partsService.getCarts();
        this.cartMsg = this.partsService.cartAmount();
  }

  //
  // //底部无限滚动
  // onScrollDown () {
  //     if(!this.noData) {
  //         if (document.body.scrollTop + document.body.clientHeight >= (document.body.scrollHeight - 5)) {
  //             if (!this.loadmore) {
  //                 this.loadmore = true;
  //                 //获取设备信息
  //                 this.getData();
  //             }
  //         }
  //     }
  // }
  //
  // 获取设备信息
  getData() {
    let parts_data = this.partsService.getParts();
    let len = parts_data.length
    if (!len) {
      this.loadmore = false;
      this.noData = true;
    } else {
      for (let part of parts_data) {
        // 判断一下,购物车是否有当前配件,如果有,那么配件数组中该配件的数量为购物车的数量
        let cartPart = this.partsService.findCart(part.id)
        if (cartPart) {
          this.parts.push({
            id: part.id,
            url: part.url,
            name: part.name,
            quantity: cartPart.quantity,
            price: part.price,
            total: 0
          });
        } else {
          this.parts.push({id: part.id, url: part.url, name: part.name, quantity: 0, price: part.price, total: 0});
        }
      }
      this.loadmore = false;
    }
  }

  // 购物车显隐
  changeSlideHide(): void {
      // 购物车动画向下消失
      this.slide = false;
      // 购物车直接消失移除
      setTimeout(() => this.slideShow = false,300);
  }
  changeSlideShow(): void {
      // 如果购物车为空,那么显示提示
      if (this.partsService.getCarts().length == 0){
          this.nullShow = true;
      } else {
          // 否则,购物车向上出现
          this.slide = true;
          this.slideShow = true;
      }
  }

  // 清空购物车
  cleanCart() {
      this.parts.forEach(part => part.quantity = 0);          // 清楚配件列表的数量信息
      this.searchParts.forEach(part => part.quantity = 0);    // 清楚搜索配件的数量信息
      this.partsService.cleanCart();                      // 清楚购物车所有信息
      this.changeSlideHide();                             // 隐藏购物车
      this.cartMsg = this.partsService.cartAmount();      // 更新购物车合计信息,总数量,总金额
  }

  // 是否跳转结算,购物车为空,显示提示,则跳入结算页
  linkSettlement() {
    if (this.partsService.getCarts().length == 0) {
      this.nullShow = true;
    } else {
      this.nullShow = false;
      // this.router.navigate(['shopping', 'settlement']);
      // this.router.navigateByUrl('/shopping/settlement');
    }
  }

  // 增加/减少数量,数量变化
  changeQuantity(id: string, identification: string){
      // 修改配件信息
      let part: Part = this.parts.find(part => part.id == id);
      // 判断是增加还是减少,小于0,为0,则减一
      part.quantity = identification == "add" ? part.quantity + 1 : part.quantity - 1 >= 0 ? part.quantity - 1 : 0;

      // 搜索内的配件要与配件信息同步
      if (this.searchParts.length != 0) {
          let searchPart: Part = this.searchParts.find(part => part.id == id);
          searchPart.quantity = part.quantity;
      }

      // 修改购物车信息,如果当前配件为0,那么将从购物车移除,否则减一
      if (this.partsService.findCart(id)) {
          if (part.quantity == 0) {
              this.partsService.deleteCart(id);
          } else {
              this.partsService.updateCart(id, part);
          }
      } else {
          this.partsService.setCart(part);
      }

      // 更新购物车合计信息,总数量,总金额
      this.cartMsg = this.partsService.cartAmount();

      // 当购物车为空时,显示层隐藏
      if (this.carts.length == 0) {
          this.changeSlideHide();
      }
  }

  // 滤网产品搜索
  getSearchResult() {
      if (this.searchContent) {
          this.searchParts = [];
          // this.getHttpService.postData("/parts",{"searchContent":this.searchContent}).subscribe(data => {
          //     let data_res: any = data;
          //     for(let part of data_res){
          //         let cartPart = this.cartsDataService.findCart(part.id)
          //         if (cartPart ){
          //             this.searchParts.push({id:part.id,url:part.url,name:part.name,quantity:cartPart.quantity,price:part.price,total:0})
          //         }else{
          //             this.searchParts.push({id:part.id,url:part.url,name:part.name,quantity:0,price:part.price,total:0})
          //         }
          //     }
          //     if(this.searchParts.length == 0){
          //         this.searchResult = true;
          //     }
          // },error =>  this.errorMessage = <any>error)
      }
  }

}

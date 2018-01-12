import { Component,OnInit }                        from '@angular/core';
import { Router,ActivatedRoute }                   from '@angular/router';

// import { WePageTitleService }                      from "../service/we-page-title.service";
// import { CartsDataService,Part }                   from "../service/carts-data.service";
// import { GetHttpService,PERROUTE }                 from "../service/get-http.service";
// import { ContactDataService,Contact }              from "../service/contact-data.service";
// import { WechatApiService,Sign }                   from "../service/wechat-api.service";

@Component({
    moduleId: module.id,  //不在这个,在加载styleurl以及templateurl时,路径出错
    selector: 'my-settlement',
    templateUrl: './settlement.component.html',
    styleUrls: ['settlement.component.css'],
})
export class SettlementComponent implements OnInit {
    // carts:Part[];    //购物车信息
    // total:any = 0;   //购物车合计金额
    // errorMessage:string;
    // contact:Contact = {id:"",name:"无",phone:"",city:"无",full:"",default:false};   //默认收货地址
    // freight:any = 0;   //运费
    // message:string = "";
    // control = true;   // 控制多次触发
    // noDetails = false;
    // contact_empty = false;
    // sign:Sign;
    //
    // constructor(public wePageTitleService:WePageTitleService,
    //             private cartsDataService:CartsDataService,
    //             private getHttpService:GetHttpService,
    //             private contactDataService:ContactDataService,
    //             private route:ActivatedRoute,
    //             private wechatApiService:WechatApiService,
    //             private router:Router){}
    //
    //
    ngOnInit(): void {
    //     //获取公众号信息,sign
    //     this.getHttpService.postData("/jsapi_sign",{"url": location.href.split('#')[0]}).subscribe(data => {
    //       let sign:any = data;
    //       this.sign = sign;
    //       this.wechatApiService.setSign(this.sign);
    //     })
    //
    //     //获取用户收货地址信息
    //     this.getHttpService.getData("/contact-data").subscribe(contacts =>{
    //         let contacts_res: any = contacts
    //         for(let contact of contacts_res){
    //             if(!this.contactDataService.findContact(contact.id)){
    //                 this.contactDataService.setContact(contact)
    //             }
    //         }
    //         //获取默认收货地址
    //         if(contacts_res.length > 0){
    //             this.contact = this.contactDataService.trueContact()
    //         }
    //
    //     },error =>  this.errorMessage = <any>error)
    //
    //     //获取购物车信息
    //     this.route.data
    //       .subscribe((data: { carts: any }) => {
    //           this.carts = data.carts
    //       });
    //
    //     //获取购物车合计信息,加上运费
    //     this.total = this.cartsDataService.cartMsg().total+this.freight;
    }
    //
    //
    // // 确认订单
    // sureOrder(){
    //     // 控制多次触发
    //     if(this.control){
    //         this.control = false;
    //         // 没有默认收货地址,则显示提示
    //         if (this.contact.id){
    //             //判断购物车是否为空,空的话,显示提示
    //             if(this.carts.length >= 1) {
    //                 let quantity = this.cartsDataService.cartMsg().count;
    //                 let time = new Date()
    //                 let order_id = time.getTime().toString()
    //                 // console.log("this.carts",this.carts,quantity,this.total)
    //                 let order= {id:order_id,status:0,details:this.carts,freight:this.freight,quantity:quantity,total:this.total,message:this.message,time:time.toLocaleString(),contact:this.contact}
    //                 //调起微信支付API
    //                 if(this.sign) {
    //                     this.wechatApiService.payOrder(order, true);
    //                 }
    //             }else {
    //                 //显示购物车为空提示
    //                 this.noDetails = true;
    //             }
    //         }else{
    //             // 显示提示没有收货地址
    //             this.contact_empty = true;
    //         }
    //     }
    // }
    //
    // tolink(name:string){
    //     this.router.navigate([PERROUTE+'/'+name]);
    // }
    //
    // // 如果是微信的话,去掉padding-top
    // tabPaddingTop() {
    //     return !this.wePageTitleService.getTitle().pageTitle;
    // }
}



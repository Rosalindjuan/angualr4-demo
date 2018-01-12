import { Component,OnInit }             from '@angular/core';
import { Location }                     from '@angular/common';
import { Router }                       from '@angular/router';

// import { WePageTitleService }           from "../service/we-page-title.service";
// import { PERROUTE }                     from "../service/get-http.service";

@Component({
    selector: 'pay-success',
    template: `
    <div class="weui-tab">
        <div class="weui-msg">
            <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
            <div class="weui-msg__text-area">
                <h2 class="weui-msg__title">支付成功</h2>
                <p class="weui-msg__desc">商品将会及时发货,请耐心等待.</p>
            </div>
            <div class="weui-msg__opr-area">
                <div class="weui-btn-are clearfix">
                    <a href="javascript:;" class="weui-btn weui-btn_default" (click)="link()">查看订单</a>
                    <a href="javascript:;" class="weui-btn weui-btn_default" (click)="goback()">返回</a>
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [`.weui-msg{padding-top:50px;}.weui-msg__text-area{margin-bottom:24px;}.weui-msg__opr-area,.weui-btn-area{margin-bottom:0;}.weui-tab{color:#000;}`]
})

export class PaySuccessComponent implements OnInit{
    // url:string;

    // constructor(public wePageTitleService:WePageTitleService,
    //             private location: Location,
    //             private router:Router){}
    //
    ngOnInit(): void {
    //     // 修改title
    //     this.wePageTitleService.showBack('支付成功');
    //     this.wePageTitleService.wxSetTitle('支付成功');
    //
    //     //判断是否保持socket
    //     // this.socketService.isSocket("");
    }
    //
    //    // 如果是微信的话,去掉padding-top
    // tabPaddingTop() {
    //     return !this.wePageTitleService.getTitle().pageTitle;
    // }
    //
    // goback(){
    //     this.location.back();
    // }
    // link(){
    //     this.router.navigateByUrl(PERROUTE+"/order/detail/");
    // }
}

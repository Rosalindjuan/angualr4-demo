import {Component, OnInit} from '@angular/core';

// import { WePageTitleService } from "../service/we-page-title.service";
// import { PERROUTE }           from "../service/get-http.service";

@Component({
  selector: 'user-msg',
  templateUrl: './user-msg.component.html',
})
export class UserMsgComponent implements OnInit {
  user_data = {
    'headimgurl': '',
    'nickname': '',
    'wechatnum': '',
    'identity': '',
    'power': '',
  };

  ngOnInit(): void {
    let user: any = {
      nickname: '萌萌哒',
      headimgurl: 'http://p06blazdg.bkt.clouddn.com/20171208_5a29fdec4b0cc.png',
      identity: 1,
      power: 'product',
      openid: '1'
    };
    this.user_data.identity = user.identity ? "管理员" : "普通用户";
    if (user.power.indexOf("product") != -1) {
      this.user_data.power = "/出产"
    }
    if (user.power.indexOf("debug") != -1) {
      this.user_data.power += "/调试"
    }
    this.user_data.nickname = user.nickname;
    this.user_data.headimgurl = user.headimgurl ? user.headimgurl : '../assets/img/head.png';
  }
}



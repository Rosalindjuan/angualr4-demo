import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-index',
  templateUrl: 'user-index.component.html',
})

export class UserIndexComponent implements OnInit {
  errorMessage: string;
  news = 1;
  userData: any = {"identity": "", "openid": "", "nickname": "", "headimgurl": ""};


  ngOnInit(): void {
    let user: any = {
      nickname: '萌萌哒',
      headimgurl: 'http://p06blazdg.bkt.clouddn.com/20171208_5a29fdec4b0cc.png',
      identity: 1,
      power: 'product',
      openid: '1'
    };
    this.userData.identity = user.identity ? "管理员" : "普通用户";
    this.userData.openid = user.openid;
    this.userData.nickname = user.nickname;
    this.userData.headimgurl = user.headimgurl ? user.headimgurl : '../assets/img/head.png';
  }
}

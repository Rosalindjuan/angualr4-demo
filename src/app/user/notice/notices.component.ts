import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Notice} from './notice';


@Component({
  selector: 'notices',
  templateUrl: './notices.component.html',
  styles: [`.readed {
    color: #777;
  }`]
})
export class NoticesComponent implements OnInit {
  errorMessage: string;
  notices: Notice[] = [];
  sum = 0;
  loadmore = true; // 正在下载显示
  noData = false; // 没有数据

  constructor(private router: Router) {}

  ngOnInit(): void {
    // 获取notice
    this.getData();
  }

  // 发送请求,获取notice
  getData() {
    setTimeout(() => {
      let noticeData = [{
        id: '1',
        title: '标题1',
        readed: false,
        time: '2017-10-12 10:26'
      }, {
        id: '2',
        title: '标题1',
        readed: false,
        time: '2017-10-12 10:26'
      }]
      let len = noticeData.length;
      if (len > 0) {
        this.sum += len;
        for (let i = 0; i < len; i++) {
          this.notices.push(noticeData[i]);
        }
        this.loadmore = false;
      } else {
        this.loadmore = false;
        this.noData = true;
      }

    }, 1000);
  }

  // 底部滚动,加载更多
  onScrollDown() {
    if (!this.noData) {
      if (document.body.scrollTop + document.body.clientHeight >= (document.body.scrollHeight - 5)) {
        if (!this.loadmore) {
          this.loadmore = true;
          // 获取notice
          this.getData();
        }
      }
    }
  }
}



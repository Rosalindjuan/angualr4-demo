import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'notice-detail',
  templateUrl: './notice-detail.component.html',
  styles: [`.article {
    font-size: 14px;
  }

  .delete-button {
    display: block;
    margin-top: 20px;
    padding: 8px;
    width: 100%;
    text-align: center;
    color: #d00;
    background: #fff;
  }`]
})
export class NoticeDetailComponent implements OnInit {
  errorMessage: string;
  notice: any;
  url: string;
  delete_prompt = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // 获取通知信息
    this.notice = {
      title: 'title',
      time: '2017-10-12 12:12',
      content: '这里是通知的内容'
    }
    // this.route.data
    //   .subscribe((data: { notice: any }) => {
    //       this.notice = data.notice;
    //   });
    //
    this.getUrl();
  }

  // 获取路由上的id
  getUrl() {
    this.route.paramMap
      .switchMap((params: ParamMap) => params.get('id'))
      .subscribe(id => this.url = `/notices/${id}`);
  }

  // 删除通知
  delete() {
    console.log(this.url);
      // this.getHttpService.deleteData(this.url).subscribe(data => {
      //     var data_res:any = data;
      //     if(data_res.result){
      //         this.delete_prompt = true;
      //         setTimeout(() => this.location.back(),300);
      //     }
      // },error =>  this.errorMessage = <any>error)
  }
}



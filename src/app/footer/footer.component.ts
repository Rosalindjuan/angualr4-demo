import {Component, OnInit} from '@angular/core';

// import { GetHttpService }          from "../service/get-http.service";
// import { FooterService }           from "./footer.service"
@Component({
  selector: 'my-footer',
  templateUrl: 'footer.component.html',
})
export class FooterComponent implements OnInit {
  errorMessage: string;
  news: number;
  //
  // constructor(private getHttpService:GetHttpService,
  //             private footerService:FooterService){}

  ngOnInit(): void {
    this.news = 1;
    this.errorMessage = '';
    // this.news = this.footerService.getNewsData().news;
    // this.getHttpService.getData('/notices').subscribe(msg => {
    //   var msg_res:any = msg;
    //   this.news = msg_res.count;
    //   this.footerService.setNewsData(this.news)
    // },error =>  this.errorMessage = <any>error)
  }
}



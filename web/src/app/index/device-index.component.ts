import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'device-index',
  templateUrl: 'device-index.component.html',
  styles: ['.devices-list .weui-cell.active > .weui-cell__hd:active{box-shadow: 2px 2px 2px green;}',
    '.devices-list .weui-cell.active > .weui-cell__hd.active{border: 2px solid #71F171;}',
    '.devices-list .weui-cell.active > .weui-cell__hd{border-radius: 50%;border: 2px solid #fff;}'],
  providers: []
})

export class DeviceIndexComponent implements OnInit {
  title = 'asdf'
  ngOnInit(): void {
    this.title = 'zhang';
  }

}



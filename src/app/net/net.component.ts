import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'net',
  templateUrl: './net.component.html',
  styles: [`.weui-cells {
    padding-top: 25px;
    margin-top: 0;
    background: inherit;
  }

  .weui-cell {
    background: #fff;
  }

  .weui-cell_access:active {
    background-color: #ececec;
  }`]
})

export class NetComponent {
}

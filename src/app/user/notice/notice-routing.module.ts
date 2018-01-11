import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NoticeDetailComponent} from './notice-detail.component';
import {NoticesComponent} from './notices.component';

// import {NoticeResolve} from './notice-resolve.service';

const noticeRoutes: Routes = [
  {
    path: '',
    children: [
      {path: 'list', component: NoticesComponent, data: {title: '通知'}},
      {path: ':id', component: NoticeDetailComponent, data: {title: '系统消息'}},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(noticeRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class NoticeRoutingModule {
}

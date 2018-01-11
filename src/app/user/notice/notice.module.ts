import { NgModule }                    from '@angular/core';
import { CommonModule }                from '@angular/common';
import { InfiniteScrollModule }        from 'angular2-infinite-scroll';

import { NoticeDetailComponent }       from './notice-detail.component';
import { NoticesComponent }            from './notices.component';

import { NoticeRoutingModule }         from './notice-routing.module';

@NgModule({
  imports: [
      CommonModule,
      NoticeRoutingModule,
      InfiniteScrollModule
  ],
  declarations: [
    NoticesComponent,
    NoticeDetailComponent
  ],
})
export class NoticeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng1Module } from '../../../ng1/ng1.module';
import { EouiModule } from '../../../eoui/eoui.module';
import { SharedModule } from '../../../shared/shared.module';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { ApiDetailComponent } from './api-detail.component';
import { ApiDetailHeaderComponent } from './header/api-detail-header.component';
import { ApiDetailBodyComponent } from './body/api-detail-body.component';
import { ApiDetailQueryComponent } from './query/api-detail-query.component';
import { ApiDetailRestComponent } from './rest/api-detail-rest.component';

import { ApiDetailService } from './api-detail.service';

const NZ_COMPONETS = [
  NzButtonModule,
  NzIconModule,
  NzTagModule
];
const COMPONENTS = [
  ApiDetailComponent,
  ApiDetailHeaderComponent,
  ApiDetailBodyComponent,
  ApiDetailQueryComponent,
  ApiDetailRestComponent
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    Ng1Module,
    CommonModule,
    ...NZ_COMPONETS,
    EouiModule,
    SharedModule,
  ],
  providers:[ApiDetailService]
})
export class ApiDetailModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user/user.component';
import { ReportComponent } from './report/report.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [DashboardComponent, UserComponent, ReportComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxDatatableModule,
  ],
})
export class DashboardModule {}

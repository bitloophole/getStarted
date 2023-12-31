import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user/user.component';
import { ReportComponent } from './report/report.component';
import { PageNotFoundComponent } from 'src/app/shared/components/page-not-found/page-not-found.component';
import { ExpenseComponent } from './expense/expense.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/dashboard/profile', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'user', component: UserComponent },
      { path: 'report', component: ReportComponent },
      { path: 'expense', component: ExpenseComponent },
      { path: "**", component: PageNotFoundComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

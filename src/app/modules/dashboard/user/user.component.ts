import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  dataTable = [];

  constructor (private service: DashboardService, private alert: AlertService) {}
  

  ngOnInit(): void {
    this.fetchUserData()
  }

/**Get user data from the api */
  fetchUserData() {
    this.service.getUserDataService().subscribe((res)=> {
      if(res) {
        this.dataTable = res;
      } else {
        this.alert.openSnackBarError(res.error)
      }
    }, (err:any) => {
        this.alert.openSnackBarError(err.error)
    })
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { endpointList } from '../../shared/data/endpoint'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getUserDataService(): Observable<any> {
    const url = endpointList.userDataList;
    return this.http.get(url).pipe(catchError(error => {
      return throwError(error);
    }))
  }
}

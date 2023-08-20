import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    currentUser: any;
    authReq: any;
    constructor(private auth: AuthService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth token from the service.
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser') as string);
        if (req.url.indexOf('/api/login') > -1 || req.url.indexOf('/assets/') > -1) {
            return next.handle(req);
        }
        if (this.currentUser === null) {
            this.router.navigate(['/auth/login']);

        }
        this.authReq = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + this.currentUser.token,
                "Content-Type": "application/json"
            }
        });

        return next.handle(this.authReq).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 498 || error.status === 401) {
                    sessionStorage.removeItem('currentUser');
                    if (this.router.url !== '/auth/login') {
                        alert('Please login again')
                    }
                    this.router.navigate(['/auth/login']);
                }
                return throwError(error);
            }));
    }
}
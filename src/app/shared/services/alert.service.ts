import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBarSuccess(msg: string) {
    this._snackBar.open(msg, '', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 2000,
      panelClass: ['green-snackbar', 'login-snackbar'],
    });
  }

  openSnackBarError(msg: string) {
    this._snackBar.open(msg, '', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: ['red-snackbar', 'login-snackbar'],
    });
  }

  openSnackBarInfo(msg: string) {
    this._snackBar.open(msg, '', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: ['info-snackbar', 'login-snackbar'],
    });
  }
}

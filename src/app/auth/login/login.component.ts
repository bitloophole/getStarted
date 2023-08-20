import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TranslationService } from 'src/app/shared/services/translation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isValidationError: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private translate: TranslationService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.isValidationError = false;
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (res) => {
          if (res.StatusText === 'SUCCESS') {
            sessionStorage.setItem('currentUser', JSON.stringify(res));
            this.router.navigate([
              '/dashboard',
            ]); /**Redirect on successful login */
          } else {
            this.alertService.openSnackBarError(res.StatusText);
          }
        },
        (err: any) => {
          this.alertService.openSnackBarError(err.error.StatusText);
        }
      );
    } else {
      this.isValidationError = true;
    }
  }
}

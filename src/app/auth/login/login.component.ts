import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router,  private translate: TranslationService) {}
  
  login(): void {
    this.errorMessage = ''; // Clear any previous error message

    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe(
        () => {
          this.router.navigate(['/dashboard']); // Redirect on successful login
        },
        error => {
          this.errorMessage = 'Invalid username or password'; // Display error message
        }
      );
    }
  }
}

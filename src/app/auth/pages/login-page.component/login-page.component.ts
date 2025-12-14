import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@auth/services/auth.services';

@Component({
  selector: 'login-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  fb = inject(FormBuilder);
  hasError = signal(false);
  isPosting = signal(false);
  router = inject(Router);

  loading = signal(false);

  authService = inject(AuthService);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    this.loading.set(true);
    if (this.loginForm.invalid) {
      this.hasError.set(true);
      // this.retornarError();
      setTimeout(() => {
        this.loading.set(false);
        setTimeout(() => {
          this.hasError.set(false);
        }, 3000);
        this.hasError.set(false);
      }, 3000);
      return;
    }

    const { email = '', password = '' } = this.loginForm.value;

    this.authService.login(email!, password!).subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigateByUrl('/home');
        this.loading.set(false);
        return;
      }
      this.hasError.set(true);
      setTimeout(() => {
        this.loading.set(false);
        setTimeout(() => {
          this.hasError.set(false);
        }, 3000);
      }, 3000);
    });
  }

  retornarError() {
    this.retornarError();
    return;
  }
}

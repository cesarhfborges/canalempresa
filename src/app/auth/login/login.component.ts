import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = new FormGroup({
      email: new FormControl('chborges@brasal.com.br', [Validators.required, Validators.email]),
      password: new FormControl('91344356', [Validators.required, Validators.minLength(4)]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.authService.login(this.form.value).then(
        r => {
          console.log(r);
          localStorage.setItem('auth', JSON.stringify(r.user));
          this.router.navigate(['home']);
        }
      ).catch(error => {
        console.log(error);
      });
    }
  }
}

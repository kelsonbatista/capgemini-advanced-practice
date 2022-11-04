import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.auth.login(this.email, this.password)) {
      this.router.navigate(["protectedpage"]);
      return;
    }
    alert("Email ou Senha inválida");
    this.email = ';'
    this.password = '';
  }

}

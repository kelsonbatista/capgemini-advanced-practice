import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbS5iciIsInBhc3N3b3JkIjoiMTIzNDU2In0.0voQQG42lzta__yJIoW_HHAabDR-hG7HIOeiXQPnaNA";

  constructor() { }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem("access-token")
  }

  login(email: string, password: string): boolean {
    if (email == "admin@admin.com.br" && password == "123456") {
      sessionStorage.setItem("access-token", this.accessToken);
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem("access-token");
  }
}

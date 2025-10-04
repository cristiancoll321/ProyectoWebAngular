import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  error = '';
  
  //Crendenciales de ejemplo
  private readonly USER = 'usuario';
  private readonly PASS = 'password123';

  constructor(private router: Router) {}
    onLogin() {
      if (this.username === this.USER && this.password === this.PASS) {
        // Redirigir al inicio si las credenciales son correctas
        this.router.navigate(['/inicio']);
      } else {
        this.error = 'Credenciales incorrectas. Inténtalo de nuevo.'; 
    }
  }
  ngOnInit(): void {}
} 
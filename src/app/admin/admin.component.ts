import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  standalone: true,  
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],  
})
export class AdminComponent {
  loginEmail: string = ''; 
  isLoggingIn: boolean = false;
  addLogin:FormGroup;

  constructor(private apiService: ApiService, private router: Router, private fb:FormBuilder) {
    this.addLogin = this.fb.group({
      email:['',Validators.required]

    })
  }

  onLogin() {
    if (this.isLoggingIn) return; 
    this.isLoggingIn = true;

    if (!this.addLogin.value.email) {
      console.error('Email is required!');
      this.isLoggingIn = false;
      return;
    }

    this.apiService.loginAdmin({ email: this.addLogin.value.email }) 
      .then(response => {
        console.log(response.message); 

        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/librarianPanel']);
      })
      .catch(error => {
        console.error('Login failed', error.message); 
      })
      .finally(() => {
        this.isLoggingIn = false; 
      });
  }

  onRegister() {
    this.router.navigate(['/adminRegister']); 
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './adminRegister.component.html',
  styleUrl: './adminRegister.component.css',
})
export class AdminRegisterComponent {
  
  login(){
    this.router.navigate(['/admin']);
  }



  loginEmail: string = '';
 


  isRegistering: boolean = false;
  isLoggingIn: boolean = false;
  addRegister:FormGroup;


  constructor(private apiService: ApiService, private router: Router, private fb:FormBuilder) {
    this.addRegister = this.fb.group({
      name: ['',Validators.required],
      email:['',Validators.required],
      role:['',Validators.required]

    })
  }


  onRegister() {
    if (this.isRegistering) return; 
    this.isRegistering = true; 

    const userData = {
      name: this.addRegister.value.name,
      email: this.addRegister.value.email,
      role: this.addRegister.value.role
    };

    this.apiService.registerAdmin(userData)
      .then(response => {
        console.log('Registration successful:', response);
        userData; 
        
      })
      .catch(error => {
        console.error('Registration failed:', error);
      
      })
      .finally(() => {
        this.isRegistering = false; 
      });
      this.router.navigate(['/admin']);
  }
  onLogin() {
    if (this.isLoggingIn) return; 
    this.isLoggingIn = true;
    if (this.addRegister) {
      if (this.loginEmail === this.addRegister.value.email) {
        
        console.log('Login successful: User validated');
    
      } else {
        console.error('Login failed: Invalid credentials');
     
      }
    } else {
      console.error('Login failed: No registered user data found');

    }

    this.isLoggingIn = false; 
  }

}
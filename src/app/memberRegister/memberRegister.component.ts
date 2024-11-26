import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-member-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
 templateUrl: './memberRegister.component.html',
  styleUrls: ['./memberRegister.component.css'],
 
})
export class MemberRegisterComponent {
  
  login(){
    this.router.navigate(['/member']);
  }

  loginEmail: string = '';
 


  isRegistering: boolean = false;
  isLoggingIn: boolean = false;
  addMemberRegister:FormGroup;


  constructor(private apiService: ApiService, private router: Router, private fb:FormBuilder) {
    this.addMemberRegister = this.fb.group({
      name: ['',Validators.required],
      email:['',Validators.required],
      contactNumber:['',Validators.required],
      address:['',Validators.required],
      occupation:['',Validators.required]

    })
  }


  register() {
    if (this.isRegistering) return; 
    this.isRegistering = true; 

    const userData = {
      memberName: this.addMemberRegister.value.name,
      memberEmail: this.addMemberRegister.value.email,
      memberContactNumber: this.addMemberRegister.value.contactNumber,
      memberAddress:this.addMemberRegister.value.address,
      memberOccupation:this.addMemberRegister.value.occupation
    };

    this.apiService.registerMember(userData)
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
      this.router.navigate(['/member']);
  }
  onLogin() {
    if (this.isLoggingIn) return; 
    this.isLoggingIn = true;
    if (this.addMemberRegister) {
      if (this.loginEmail === this.addMemberRegister.value.email) {
        
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


 
  


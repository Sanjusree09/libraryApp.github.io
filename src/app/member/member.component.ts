import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-member',
  standalone: true,
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class MemberComponent {
  memberEmail: string = ''; 
  isLoggingIn: boolean = false;
  addMemberLogin:FormGroup;

  constructor(private apiService: ApiService, private router: Router, private fb:FormBuilder) {
    this.addMemberLogin = this.fb.group({
      memberEmail:['',Validators.required]

    })
  }

  onLogin() {
    if (this.isLoggingIn) return; 
    this.isLoggingIn = true;

    if (!this.addMemberLogin.value.memberEmail) {
      console.error('Email is required!');
      this.isLoggingIn = false;
      return;
    }

    this.apiService.loginMember({ memberEmail: this.addMemberLogin.value.memberEmail }) 
      .then(response => {
        console.log(response.message); 

        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/memberPanel']);
      })
      .catch(error => {
        console.error('Login failed', error.message); 
      })
      .finally(() => {
        this.isLoggingIn = false; 
      });
  }

  onRegister() {
    this.router.navigate(['/memberRegister']); 
  }
}

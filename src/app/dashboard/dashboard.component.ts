import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent  {

  constructor(private router: Router){}
  admin(){
    this.router.navigate(['/admin']);
  }
  member(){
    this.router.navigate(['/member']);
  }


 

}

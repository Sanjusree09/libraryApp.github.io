import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
 
  templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'libraryApp';

  constructor(private router: Router){
    this.router.navigate(['/dashboard']);
  }
}

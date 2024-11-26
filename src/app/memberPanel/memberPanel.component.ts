import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memberPanel.component.html',
  styleUrl: './memberPanel.component.css',
})
export class MemberPanelComponent {
  showBooks: Boolean = false;
  showRegistry:Boolean = false;
  showBookRequest: Boolean = false;

  books(){
    this.showBooks = !this.showBooks;
    if(this.showBooks){
      this.showBookRequest = false;
      this.showRegistry=false;
    }

  }

  bookRequest(){
    this.showBookRequest = !this.showBookRequest;
    if(this.showBookRequest){
      this.showBooks = false;
      this.showRegistry=false;
    }
  }
  registry(){
    this.showRegistry = !this.showRegistry;
    if(this.showRegistry){
      this.showBookRequest=false;
      this.showBooks=false;

    }
  }
}

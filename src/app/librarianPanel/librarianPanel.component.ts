import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-librarian-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './librarianPanel.component.html',
  styleUrl: './librarianPanel.component.css',
})
export class LibrarianPanelComponent  {

  @Input() books: any[] = []; 
  @Input() patron: any[]=[];
  @Input() Registry:any[]=[];
  @Input() showBooks: boolean = false; 
  @Input() headers:string[]= ['S.no', 'Book ID', 'Title', 'Author', 'Quantity', 'Edition', 'Description'];
  @Input() membersHeaders: string[] = ['S.No', 'Member ID', 'Name', 'Email', 'Contact Number', 'Address', 'Occupation',];
  @Input() registryHeaders:string[] = ['S.No','Registry Id','Name','Title','Author','Quantity','Edition','Borrowed Date', 'Return Date']

//showBooks: Boolean = false;
showAddBooks:Boolean = false;
showUpdateBooks:Boolean = false;

showMembers: Boolean = false;
showAddMembers:Boolean = false;
showUpdateMembers:Boolean = false;

showRegistry: Boolean = false;
showAddRegistry:Boolean = false;
showUpdateRegistry:Boolean = false;

showSelectBook:Boolean = false;
showSelectRegister:Boolean = false;
showSelectMember:Boolean = false;

selectedMember:any = null;
showMemberDetails = false;

 selectedBook: any = null;
 showBookDetails = false;

selectedAdmin:any = null;
showAdminDetails = false;

selectedRegistry:any = null;
showRegistryDetails = false;


  id: any;
  bookId: any;
  registryId:any;
  memberId:any;
   addBookForm: FormGroup;
   addmemberForm: FormGroup;
   addRegistryForm: FormGroup;

   updateBookForm:FormGroup;
   updateMemberForm:FormGroup;
   updateRegistryForm:FormGroup;
  

  constructor(private fb: FormBuilder, private apiService: ApiService) {

    this.addBookForm = this.fb.group({
  
      title: ['', Validators.required],
      author: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      edition: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.addmemberForm = this.fb.group({
      memberName:['', Validators.required],
      memberEmail:['', Validators.required],
      memberContactNumber:['', Validators.required],
      memberAddress:['',Validators.required],
      memberOccupation:['',Validators.required]

    });

    this.addRegistryForm = this.fb.group({
      borrowerName:['', Validators.required],
      registryTitle:['',Validators.required],
      registryAuthor:['',Validators.required],
      registryQuantity:['',Validators.required],
      registryEdition:['',Validators.required],
      registryBorrowedDate:['',Validators.required],
      registryReturnDate:['',Validators.required]

    });

    this.updateBookForm = this.fb.group({
      bookId: ['', Validators.required],
      updateTitle: ['', Validators.required],
      updateAuthor: ['', Validators.required],
      updateQuantity: ['', [Validators.required, Validators.min(1)]],
      updateEdition: ['', Validators.required],
      updateDescription: ['', Validators.required]
      
    });

    this.updateMemberForm = this.fb.group({
      memberId:['',Validators.required],
      updateMemberName:['',Validators.required],
      updateMemberEmail:['',Validators.required],
      updateMemberContactNumber:['',Validators.required],
      updateMemberAddress:['',Validators.required],
      updateMemberOccupation:['',Validators.required]
    });

    this.updateRegistryForm = this.fb.group({
      registryId:['',Validators.required],
      updateRegistryBorrowedName:['',Validators.required],
      updateRegistryTitle:['',Validators.required],
      updateRegistryAuthor:['',Validators.required],
      updateRegistryQuantity:['',Validators.required],
      updateRegistryEdition:['',Validators.required],
      updateRegistryBorrowedDate:['',Validators.required],
      updateRegistryReturnDate:['',Validators.required]

    })

   
  }
 
   toggleBook(){
    this.showBooks = !this.showBooks;
    if(this.showBooks){
     this.showMembers=false;
     this.showAddMembers=false;
     this.showUpdateMembers=false;
     this.showAddBooks=false;
     this.showUpdateBooks=false;
     this.showRegistry=false;
     this.showAddRegistry=false;
     this.showUpdateRegistry=false;
    }
  
   }
selectAdmin(name: string){
    this.apiService.getAdminByName(name).then(response => {
     this.selectedAdmin = response;
      this.showAdminDetails = true;

    }).catch(error => {
      console.error(`Error fetching admin details:`,error);
    })
  }
 

  
  member(){
    //event.preventDefault();
    this.showMembers = !this.showMembers;
    if(this.showMembers){
     this.showAddMembers=false;
     this.showUpdateMembers=false;
     this.showAddBooks=false;
     this.showBooks=false;
     this.showUpdateBooks=false;
     this.showRegistry=false;
     this.showAddRegistry=false;
     this.showUpdateRegistry=false;
    }
    
   

  }
  updateMember(){
    this.showUpdateMembers = !this.showUpdateMembers;
    if(this.showUpdateMembers){
      this.showMembers = false;
      this.showAddMembers = false;
      this.showBooks = false;
      this.showAddBooks=false;
      this.showUpdateBooks=false;
      this.showRegistry = false;
      this.showAddRegistry=false;
     this.showUpdateRegistry=false;
      

    }
  }
  registry(){
    this.showRegistry = !this.showRegistry;
   if(this.showRegistry){
    this.showMembers=false;
    this.showAddMembers=false;
    this.showUpdateMembers=false;
    this.showBooks = false;
    this.showAddBooks=false;
    this.showUpdateBooks=false;
    this.showAddRegistry = false;
    this.showUpdateRegistry=false;
    
   }
  }
addBooks(){
  this.showAddBooks = !this.showAddBooks;
  if(this.showAddBooks){
    this.showMembers = false;
    this.showAddMembers = false;
    this.showUpdateMembers=false;
    this.showBooks = false;
    this.showUpdateBooks=false;
    this.showMembers = false;
    this.showRegistry = false;
    this.showAddRegistry=false;
    this.showUpdateRegistry=false;
   
  }


}
updateBooks(){
  this.showUpdateBooks = !this.showUpdateBooks;
  if(this.showUpdateBooks){
    this.showMembers = false;
    this.showAddMembers = false;
    this.showUpdateMembers=false;
    this.showBooks = false;
    this.showAddBooks = false;
    this.showRegistry = false;
    this.showAddRegistry=false;
    this.showUpdateRegistry = false;
   
   
  }
  

}
addMembers(){
  this.showAddMembers = !this.showAddMembers;
  if(this.showAddMembers){
    this.showMembers = false;
    this.showUpdateMembers=false;
    this.showBooks = false;
    this.showAddBooks=false;
    this.showUpdateBooks=false;
    this.showRegistry = false;
    this.showAddRegistry=false;
    this.showAddBooks = false;
    this.showUpdateRegistry=false;
    
  }
}

closeBookDetails() {
  this.selectedBook = null;
  this.showBooks = true;  
}
closeRegistryDetails(){
  this.showRegistryDetails = false;
  this.selectedRegistry = null;
}
closeMemberDetails(){
  this.selectedMember = null;
  this.showMemberDetails = false;
  this.showUpdateMembers = false;
 }

addRegistry(){
  this.showAddRegistry = !this.showAddRegistry;
 if(this.showAddRegistry){
  this.showMembers=false;
  this.showAddMembers=false;
  this.showUpdateMembers=false;
  this.showBooks=false;
  this.showAddBooks=false;
  this.showUpdateBooks=false;
  this.showRegistry=false;
  this.showUpdateRegistry=false;
 }
}
updateRegistry(){
  this.showUpdateRegistry = !this.showUpdateRegistry;
  if(this.showUpdateRegistry){
    this.showMembers=false;
    this.showAddMembers=false;
    this.showUpdateMembers=false;
    this.showBooks=false;
    this.showAddBooks=false;
    this.showUpdateBooks=false;
    this.showRegistry=false;
    this.showAddRegistry=false;

  }
}

addBook(event: Event) {
  event.preventDefault();
  if (this.addBookForm.invalid) {
    alert("Please fill all the fields correctly.");
    return;
  }

    const bookData = {
      id: this.id, 
      title: this.addBookForm.value.title,
      author: this.addBookForm.value.author,
      quantity: this.addBookForm.value.quantity,
      edition: this.addBookForm.value.edition,
      description: this.addBookForm.value.description
    };

 
    this.apiService.addBooks(bookData)
      .then(response => {
        console.log('Book Added Successfully:', response);
        const bookId = response.book;

        this.books.push({
          bookId: bookId.id,
          title: this.addBookForm.value.title,
          author: this.addBookForm.value.author,
          quantity: this.addBookForm.value.quantity,
          edition: this.addBookForm.value.edition,
          description: this.addBookForm.value.description
        });

        console.log('Book ID:', this.id);

        this.addBookForm.reset();
      })
      .catch(error => {
        console.error('Error adding book:', error);
        alert('Error adding book');
      });
  }



selectBook(bookId: string) {
  this.apiService.getBookById(bookId).then(book => {
    this.selectedBook = book;
    this.showBooks = true;
  }).catch(error => {
    console.error('Error fetching book:', error);
  });
}

onUpdateBook(event: Event) {
  event.preventDefault();

  const updatedData = {
    bookId: this.updateBookForm.value.bookId,
    title: this.updateBookForm.value.updateTitle,
    author: this.updateBookForm.value.updateAuthor,
    quantity: this.updateBookForm.value.updateQuantity,
    edition: this.updateBookForm.value.updateEdition,
    description: this.updateBookForm.value.updateDescription
  };


  this.apiService.updateBook(updatedData.bookId, updatedData)
    .then(response => {
      console.log('Book updated:', response);

      this.books = this.books.map(book => 
        book.bookId === updatedData.bookId ? { ...book, ...updatedData } : book
      );
      this.updateBookForm.reset();
      this.showUpdateBooks = false; 
    })
    .catch(error => {
      console.error('Error updating book:', error);
      alert('Error updating book');
    });
}

addregistry(event: Event) {
  event.preventDefault();

  const registryData = {
    borrowerName: this.addRegistryForm.value.borrowerName,
    registryTitle: this.addRegistryForm.value.registryTitle,
    registryAuthor: this.addRegistryForm.value.registryAuthor,
    registryQuantity: this.addRegistryForm.value.registryQuantity,
    registryEdition: this.addRegistryForm.value.registryEdition,
    registryBorrowedDate: this.addRegistryForm.value.registryBorrowedDate,
    registryReturnDate: this.addRegistryForm.value.registryReturnDate
  };

  this.apiService.addRegistry(registryData)
    .then(response => {
      console.log('Response from backend:', response);
      console.log('Received registryId:', response.registryId);  

      this.Registry.push({
        id: response.registryId,
        borrowerName: this.addRegistryForm.value.borrowerName,
        registryTitle: this.addRegistryForm.value.registryTitle,
        registryAuthor: this.addRegistryForm.value.registryAuthor,
        registryQuantity: this.addRegistryForm.value.registryQuantity,
        registryEdition: this.addRegistryForm.value.registryEdition,
        registryBorrowedDate: this.addRegistryForm.value.registryBorrowedDate,
        registryReturnDate: this.addRegistryForm.value.registryReturnDate
      });

      console.log('Updated Registry Array:', this.Registry); 

      this.addRegistryForm.value.borrowerName = '';
      this.addRegistryForm.value.registryTitle = '';
      this.addRegistryForm.value.registryAuthor = '';
      this.addRegistryForm.value.registryQuantity = '';
      this.addRegistryForm.value.registryEdition = '';
      this.addRegistryForm.value.registryBorrowedDate = '';
      this.addRegistryForm.value.registryReturnDate = '';
    })
    .catch(error => {
      console.error('Error adding Registry book:', error);
      alert('Error adding book');
    });
}


selectRegistry(registryId: string) {
  this.apiService.getRegistryById(registryId).then(registry => {
    this.selectedRegistry = registry;
    this.showRegistry = false;   
  }).catch(error => {
    console.error('Error fetching Registry:', error);
  });
}
onUpdateRegistry(event: Event) {
  event.preventDefault();

  const updatedRegistry = {
    registryId: this.updateRegistryForm.value.registryId,
    updateRegistryBorrowedName: this.updateRegistryForm.value.updateRegistryBorrowedName,
    updateRegistryTitle: this.updateRegistryForm.value.updateRegistryTitle,
    updateRegistryAuthor: this.updateRegistryForm.value.updateRegistryAuthor,
    updateRegistryQuantity: this.updateRegistryForm.value.updateRegistryQuantity,
    updateRegistryEdition: this.updateRegistryForm.value.updateRegistryEdition,
    updateRegistryBorrowedDate: this.updateRegistryForm.value.updateRegistryBorrowedDate,
    updateRegistryReturnDate: this.updateRegistryForm.value.updateRegistryReturnDate
  };


  this.apiService.updateRegistry(updatedRegistry.registryId, updatedRegistry)
    .then(response => {
      console.log('Member updated:', response);

      this.Registry = this.Registry.map(reg => 
        reg.registryId === updatedRegistry.registryId ? { ...reg, ...updatedRegistry } : reg
      );
      this.updateMemberForm.reset();
      this.showUpdateMembers = false; 
    })
    .catch(error => {
      console.error('Error updating member:', error);
      alert('Error updating member');
    });
}




addMember(event: Event) {
  event.preventDefault(); 

  const memberData = {
    memberId: this.addmemberForm.value.memberId,  
    memberName: this.addmemberForm.value.memberName,
    memberEmail: this.addmemberForm.value.memberEmail,
    memberContactNumber: this.addmemberForm.value.memberContactNumber,
    memberAddress: this.addmemberForm.value.memberAddress,
    memberOccupation: this.addmemberForm.value.memberOccupation,
  };

  this.apiService.addMember(memberData)
    .then(response => {
      console.log('Member Added Successfully:', response);
      const memberId = response.memberId;
      console.log('Member ID:', memberId);
  
      this.patron.push({
        memberId: memberId,  
        memberName: this.addmemberForm.value.memberName,
        memberEmail: this.addmemberForm.value.memberEmail,
        memberContactNumber: this.addmemberForm.value.memberContactNumber,
        memberAddress: this.addmemberForm.value.memberAddress,
        memberOccupation: this.addmemberForm.value.memberOccupation,
      });

      this.addmemberForm.value.memberName = '';
      this.addmemberForm.value.memberEmail = '';
      this.addmemberForm.value.memberContactNumber = '';
      this.addmemberForm.value.memberAddress = '';
      this.addmemberForm.value.memberOccupation = '';
    })
    .catch(error => {
      console.error('Error adding member:', error);
      alert('Error adding member');
    });
}


selectMember(memberId: string) {
  this.apiService.getMembersById(memberId).then(member => {
    this.selectedMember = member;
    this.showMembers = false;   
  }).catch(error => {
    console.error('Error fetching Member:', error);
  });
}

onUpdateMember(event: Event) {
  event.preventDefault();

  const updatedMember = {
    memberId: this.updateMemberForm.value.memberId,
    updateMemberName: this.updateMemberForm.value.updateMemberName,
    updateMemberEmail: this.updateMemberForm.value.updateMemberEmail,
    updateMemberContactNumber: this.updateMemberForm.value.updateMemberContactNumber,
    updateMemberAddress: this.updateMemberForm.value.updateMemberAddress,
    updateMemberOccupation: this.updateMemberForm.value.updateMemberOccupation
  };


  this.apiService.updateMember(updatedMember.memberId, updatedMember)
    .then(response => {
      console.log('Member updated:', response);

      this.patron = this.patron.map(member => 
        member.memberId === updatedMember.memberId ? { ...member, ...updatedMember } : member
      );
      this.updateMemberForm.reset();
      this.showUpdateMembers = false; 
    })
    .catch(error => {
      console.error('Error updating member:', error);
      alert('Error updating member');
    });
}





}




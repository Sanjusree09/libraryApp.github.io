import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private apiUrl = 'http://localhost:3600'; 
  constructor() { }

  

    registerAdmin(userData: { name: string; email: string; role: string }) {
      return axios.post(`${this.apiUrl}/admin/Signup`, userData)
        .then(response => {
          const { token } = response.data;  
          localStorage.setItem('authToken', token);
          return response.data; 
        })
        .catch(error => {
          console.error('Registration Error:', error);
          throw error;
        });
    }
    loginAdmin(userData: { email: string }) {
      return axios
        .post(`${this.apiUrl}/admin/login`, userData) 
        .then((response) => {
          return response.data; 
        })
        .catch((error) => {
          throw new Error(error.response ? error.response.data.message : 'Login failed');
        });
    }
    
    
    

    isAuthenticated() {
      const token = localStorage.getItem('authToken');
      return token ? true : false; 
    }

    logout() {
      localStorage.removeItem('authToken'); 
    }
  
  


  getAdminByName(name: string) {
    return axios.get(`${this.apiUrl}/admin/getAdmin/${name}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching book:', error);
        throw error; 
      });
  }
  
  

   ////////////Member Registration and login//////////////
   registerMember(userData: { memberName: string; memberEmail: string; memberContactNumber: string; memberAddress:string; memberOccupation:string }) {
    return axios.post(`${this.apiUrl}/member/Signup`, userData)
      .then(response => {
        const { token } = response.data;  
        localStorage.setItem('authToken', token);
        return response.data; 
      })
      .catch(error => {
        console.error('Member Registration Error:', error);
        throw error;
      });
  }


  loginMember(userData: { memberEmail: string }) {
    return axios
      .post(`${this.apiUrl}/member/login`, userData) 
      .then((response) => {
        return response.data; 
      })
      .catch((error) => {
        throw new Error(error.response ? error.response.data.message : 'Login failed');
      });
  }
  
  
  

  isMemberAuthenticated() {
    const token = localStorage.getItem('authToken');
    return token ? true : false; 
  }

  memberLogout() {
    localStorage.removeItem('authToken'); 
  }



  //////////////////////////Add books///////////////////////////////////////////////

  addBooks(bookData: {title:string, author:string, quantity:string , edition:string, description:string}){
    return axios.post(`${this.apiUrl}/addBooks`,bookData)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });

  }
  getBookById(id: string) {
    return axios.get(`${this.apiUrl}/getBooks/${id}`)
      .then(response => response.data.book)  
      .catch(error => {
        console.error('Error fetching book:', error);
        throw error;
      });
  }
  updateBook(bookId: string, updatedData: { title: string; author: string; quantity: string; edition: string; description: string }) {
    console.log(`Updating Book ID: ${bookId} with Data:`, updatedData);
    const url = `${this.apiUrl}/updateBooks/${bookId}`;
  
    return axios.put(url, updatedData)
      .then(response => {
        console.log('Book updated successfully:', response.data);
        return response.data;
      })
      .catch(error => {
        console.error('Error updating book:', error);
        if (error.response) {
          console.error('Server Error:', error.response.status);
          console.error('Error details:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error during request setup:', error.message);
        }
        throw error;
      });
  }
  

  //////////////////MEMBER/////////////////////////////
  addMember(memberData:{memberName:string; memberEmail:string; memberContactNumber:string; memberAddress:string; memberOccupation:string})
  {
    return axios.post(`${this.apiUrl}/member/Signup`,memberData)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
  }
  getMembersById(id: string) {
    return axios.get(`${this.apiUrl}/getMember/${id}`)
      .then(response => response.data.member)
      .catch(error => {
        console.error('Error fetching member:', error);
        throw error; 
      });
  }


  updateMember(memberId: string, updatedMember: { updateMemberName: string; updateMemberEmail: string; updateMemberContactNumber: string; updateMemberAddress: string; updateMemberOccupation: string }) {
    console.log(`Updating Member ID: ${memberId} with Data:`, updatedMember);
    const url = `${this.apiUrl}/updateMember/${memberId}`;
  
    return axios.put(url, updatedMember)
      .then(response => {
        console.log('Member updated successfully:', response.data);
        return response.data;
      })
      .catch(error => {
        console.error('Error updating member:', error);
        if (error.response) {
          console.error('Server Error:', error.response.status);
          console.error('Error details:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error during request setup:', error.message);
        }
        throw error;
      });
  }
  


////////////////////REGISTRY/////////////////////////////


  addRegistry(registryData: {borrowerName:string, registryTitle:string, registryAuthor:string , registryQuantity:string, registryEdition:string, registryBorrowedDate:string, registryReturnDate:string}){
    console.log(`Registry Data:`,registryData);
    return axios.post(`${this.apiUrl}/addRegistry`,registryData)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });

  }
 

  getRegistryById(id: string) {
    return axios.get(`${this.apiUrl}/getRegistry/${id}`)
      .then(response => response.data.registry)
      .catch(error => {
        console.error('Error fetching registry:', error);
        throw error; 
      });
  }
  updateRegistry(registryId: string, updatedRegistry: { updateRegistryBorrowedName: string; updateRegistryTitle: string; updateRegistryAuthor: string; updateRegistryQuantity:string; updateRegistryEdition: string; updateRegistryBorrowedDate: string; updateRegistryReturnDate:string }) {
    console.log(`Updating Registry ID: ${registryId} with Data:`, updatedRegistry);
    const url = `${this.apiUrl}/updateRegistry/${registryId}`;
  
    return axios.put(url, updatedRegistry)
      .then(response => {
        console.log('Registry updated successfully:', response.data);
        return response.data;
      })
      .catch(error => {
        console.error('Error updating member:', error);
        if (error.response) {
          console.error('Server Error:', error.response.status);
          console.error('Error details:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error during request setup:', error.message);
        }
        throw error;
      });
  }
  
 
  
  
}

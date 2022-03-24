import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // userRegister(userdetails: any) {
  //   throw new Error('Method not implemented.');
  // }
  userLoggedIn:boolean;
  constructor(private HttpClient:HttpClient) {           
    this.userLoggedIn = true;            //initially set to false
  }

  getUserLoggedIn(){
    return this.userLoggedIn;
  } 

  setUserLoggedIn(){
    this.userLoggedIn=true;
  }
  showAllUsers(){
    return this.HttpClient.get('http://localhost:3000/fetch');
  };
  userRegister(userdetails:any){
    return this.HttpClient.post('http://localhost:3000/register',userdetails);
  }
  getUserEmailAndPassword(loginForm:any){
    return this.HttpClient.get('http://localhost:3000/login/'+ loginForm.email+"/"+loginForm.password);
  }
  addComment(comments:any){
    return this.HttpClient.post('http://localhost:3000/insert_com',comments);
  }
  showComments(){
    return this.HttpClient.get('http://localhost:3000/fetch_com');
  }
  cppAddComment(cpp_comments:any){
    return this.HttpClient.post('http://localhost:3000/insert_cpp_com',cpp_comments);
  }
  cppShowComments(){
    return this.HttpClient.get('http://localhost:3000/fetch_cpp');
  }
  cAddComment(c_comments:any){
    return this.HttpClient.post('http://localhost:3000/insert_c',c_comments);
  }
  cShowComments(){
    return this.HttpClient.get('http://localhost:3000/fetch_c');
  }
  addDis(discuss:any){
    return this.HttpClient.post('http://localhost:3000/insert_dis',discuss);
  }
  showDis(){
    return this.HttpClient.get('http://localhost:3000/fetch_dis');
  }
}

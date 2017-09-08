  import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {TaskService} from './services/task.service';
 import {AppService} from './../app.service';
 import { Router } from '@angular/router';
 import{AppComponent} from './../app.component';
 import {AddUserService} from './login.service';
@Component({

  selector: 'login',
  templateUrl: 'login.component.html'
  // providers:[TaskService]
})

export class LoginComponent {
  userData:{};
  data:{
    username:String,
    password:String
  };
  
  username:String
  password:String
  patientDetails:any
  constructor(private appService: AppService, private router: Router, private appComponent: AppComponent,private userService:AddUserService){
  
  }

 

  onSubmit(g: NgForm){
    console.log('Username:', g.value.username);

    this.appService.getApp(g.value.username,g.value.password)
                    .subscribe(patients => {
                         localStorage.setItem('patientDetails',JSON.stringify(patients));
                         localStorage.setItem('signUpFlag',"false");
                        this.appComponent.signUpdissapear();
                        this.router.navigate([''])
                    })
                   
    

  }
 onPost(f: NgForm){
     console.log('Uname:', f.value.username);
      event.preventDefault();
     var addUser=
     {
       //vendor_id :this.vendorDet[0].vendor_id,
       username: f.value.username,
       password:f.value.password,
       firstname:f.value.firstname,
       lastname:f.value.lastname,
       email:f.value.email,
       phonenumber:f.value.phonenumber,
       role:f.value.role,
       upload:f.value.upload
      


     }
     //this.vendorService.setData("vendor_id",updateVendor.vendor_id);
     this.userService.setData("username",addUser.username);
     this.userService.setData("password",addUser.password);
     this.userService.setData("firstname",addUser.firstname);
    this.userService.setData("lastname",addUser.lastname);
     this.userService.setData("email",addUser.email);
     this.userService.setData("phonenumber",addUser.phonenumber);
      this.userService.setData("role",addUser.role);
      this.userService.setData("upload",addUser.upload);
    
     this.userData=this.userService.getData();
    this.userService.postApp(this.userData)
                     .subscribe(patients => {
                       
                          localStorage.setItem('patientDetails',JSON.stringify(patients));
                          localStorage.setItem('signUpFlag',"false");
                         this.appComponent.signUpdissapear();
                         this.router.navigate([''])
                    })
                   
    

 }

 }

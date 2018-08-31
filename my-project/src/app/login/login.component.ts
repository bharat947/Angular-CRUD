import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { FormGroup , FormBuilder ,Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 model:any={}
    loginForm: FormGroup
  constructor(private router:Router,private builder:FormBuilder) { }
  
  ngOnInit() {
    this.loginForm=this.builder.group({
       username: ['' ],
       password: ['' ]
     });
  }
  show(){
   // alert(this.loginForm.controls['username'].value);
    //set pwd
    this.loginForm.controls['password'].setValue(this.loginForm.controls['username'].value);
  }
  loginUser(){
  	console.log(this.model.username,this.model.password);
    var user=this.model.username;
    var password=this.model.password;
    console.log(user);
    console.log(password);
    if(user=='bharat' && password=='bharat'){
    	console.log(this.model.username);
    	console.log(this.model.password);
      this.router.navigate(['userdata']);
    }
  }
  }

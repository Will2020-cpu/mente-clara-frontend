import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    phone:new FormControl(''),
  })

  constructor(private formBuilder: FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  public registrarse(){
    const user:UserModel = this.formGroup.value;
    this.userService.registrarse(user).then(response =>{
      console.log(response)
      if(response.token){
        localStorage.setItem('token',response.token);
        this.router.navigate(['/']);
      }  
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    phone:new FormControl(''),
  })
  constructor(private formBuilder: FormBuilder,private userService:UserService ) { }

  ngOnInit(): void {
  }

  public iniciarSesion(){
    const user:UserModel = this.formGroup.value;
    this.userService.iniciarSesion(user).then(response =>{
      console.log(response);
    })
  }
}

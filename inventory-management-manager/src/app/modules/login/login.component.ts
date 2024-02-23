import { Component, OnInit } from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { NgForm,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
name: any;
email: any;
pswd: any;
signupform : any;
loginform:any;
constructor(){}
  ngOnInit(): void {
    
  }

}

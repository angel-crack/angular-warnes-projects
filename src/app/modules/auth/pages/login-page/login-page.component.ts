import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  formLogin: FormGroup = new FormGroup({});
  
  constructor() {}
  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl(''),
        password: new FormControl('')
      }
    )
  }

}

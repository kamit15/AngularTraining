import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  onSubmit(data: any) {
    console.log(data);
    if (data.uid == 'admin' && data.password == '12345') {
      // alert('Login Success');
      sessionStorage.setItem('uid', data.uid);
    }
    else{
      // alert('Login Failed');
    }
  }
}

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
    sessionStorage.removeItem('user');
    if (data.uid == 'admin' && data.password == '12345') {
      // alert('Login Success');
      sessionStorage.setItem('uid', data.uid);
      localStorage.setItem('jwt','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
    }
    else{
      // alert('Login Failed');
    }
  }
}

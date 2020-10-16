import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition  } from '@angular/material/snack-bar';

import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username  = new FormControl('', Validators.required);
  password  = new FormControl('', Validators.required);
  hidePassword = true;

  checkCredentialValidity = false;
  rememberCredential = new FormControl(false);

  snackHPos: MatSnackBarHorizontalPosition = 'center';
  snackVPos: MatSnackBarVerticalPosition = 'top';

 constructor(private appService: AppService, private appRouter: Router, private snackBar: MatSnackBar) { }

 ngOnInit() {}

 login() {
  this.checkCredentialValidity = true;

  if ((this.username.valid) && (this.password.valid)) {
    if ((this.username.value === 'souvick') && (this.password.value === '12345')) {
      if (localStorage) {
        localStorage.setItem('bfs_buyerprofile_uid', '1');
        this.appRouter.navigate(['/home']);
      } else {
        alert('Internal Server Error! Please Contact Admin');
      }

    } else {
      alert('User Not Found');
    }
  }
 }

 remember_action() {
  this.checkCredentialValidity = true;
 }

}

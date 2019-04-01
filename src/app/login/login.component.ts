import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../firebase/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authservice:AuthenticateService, private router: Router) { }

  ngOnInit() {
  }
  facebook(){
    this.authservice.FacebookLogin().then(() => {
      this.router.navigate(['/user'])
    })
  }

  google(){
    this.authservice.doGoogleLogin().then(() => {
      this.router.navigate(['/user'])
    })
    }
  }

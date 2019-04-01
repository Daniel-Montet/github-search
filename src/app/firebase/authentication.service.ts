import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { User } from  'firebase';



@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  user: User;

  constructor(public angularfireAuth: AngularFireAuth,public r:Router ){
    this.angularfireAuth.authState.subscribe(user =>{
      
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  
  }

  FacebookLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.angularfireAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
 }
 doGoogleLogin(){
  return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.angularfireAuth.auth
    .signInWithPopup(provider)
    .then(res => {
      resolve(res);
    })
  })
}

logout(){
  this.angularfireAuth.auth.signOut();
 localStorage.removeItem('user');
 this.r.navigate(['/login']);

}
}

//import { UserComponent } from './../user/user.component';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';


interface ApiResponse{
  login;
  repository;
  avatar;
  followers;
  name;

}


@Injectable({
  providedIn: 'root'
})

export class GithubServiceService {
 username:string;

  constructor(private http:HttpClient) {
    
   }

   getUser(){
    return this.http.get<ApiResponse>(environment.apiUrl+environment.users+this.username+environment.accesstoken)
   }

   getRepo(){
     return this.http.get<ApiResponse>(environment.apiUrl+environment.repositories)
   }

}

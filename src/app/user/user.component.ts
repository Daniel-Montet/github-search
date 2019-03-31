import { GithubServiceService } from './../githubapi/github-service.service';
import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

interface ApiResponse{
  login;
  repository;
  avatar;
  followers;
  name;

}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
username;
name;
inputname;

// input(value:string){
//   value=this.inputname
//   return value
// }

  constructor(public gH:GithubServiceService,private http:HttpClient) { }

  ngOnInit() {
  }


displayname(){
  this.http.get<ApiResponse>(environment.apiUrl+environment.user+this.inputname+environment.accesstoken).subscribe(data=>{
    this.username=data.login;
    this.name=data.name
    
  })
}

// getUser(){
//   return this.http.get<ApiResponse>(environment.apiUrl+environment.user+this.inputname+environment.accesstoken)
//  }

 getRepo(){
   return this.http.get<ApiResponse>(environment.apiUrl+environment.repositories)
 }

 
}


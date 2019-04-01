import { GithubServiceService } from './../githubapi/github-service.service';
import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

interface ApiResponse{
  avatar_url
  name;
  email;
  public_repos;
  followers;
  created_at;
 
  

}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //github properties
image;
name;
email;
public_repos;
followers;
created_at;

  //
username;

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
    this.image=data.avatar_url;
    this.name=data.name;
    this.email=data.email;
    this.public_repos=data.public_repos;
    this.followers=data.followers;
    this.created_at=data.created_at;
    
  })
}

// getUser(){
//   return this.http.get<ApiResponse>(environment.apiUrl+environment.user+this.inputname+environment.accesstoken)
//  }

 getRepo(){
   return this.http.get<ApiResponse>(environment.apiUrl+environment.repositories)
 }

 
}


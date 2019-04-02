import { GithubServiceService } from './../githubapi/github-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { AuthenticateService } from '../firebase/authentication.service';
import { Search } from '../search'

interface ApiResponse {
  avatar_url
  name;
  email;
  public_repos;
  followers;
  created_at;
  repos_url;


}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //github properties
  image:any;
  name:any;
  email:any;
  public_repos:any;
  followers:any;
  created_at:any;
  repos_url:any;
  
  //

  username:any;
  inputname:any;
  repositoryname:any;
  inputrepository:any;

  // input(value:string){
  //   value=this.inputname
  //   return value
  // }
  
  userrepository:any;

  constructor(public gH: GithubServiceService, private http: HttpClient, private authservice: AuthenticateService) { }



  
  //https://api.github.com/repos/daniel-montet/portfolio?access_token=b5ac045230c461971af93fa5d3a2129d75961c94

  //https://api.github.com/repos/Daniel-Montet/portfolio?access_token=043586e9c75ac64b8b0b4007fdc449d18a2d168c"

  getrepo() {//get requested user repository--search through repos
    this.http.get<ApiResponse>(environment.apiUrl + 'repos/' +'daniel-montet'+'/'+this.inputname+environment.accesstoken).subscribe(data => {
      this.image = data.avatar_url;
      this.name = data.name;
      this.email = data.email;
      this.public_repos = data.public_repos;
      this.followers = data.followers;
      this.created_at = data.created_at;

    })
  }

  getuserrepos(){///loops and gets user specific repositories
    this.http.get(environment.apiUrl + environment.users +this.inputname+environment.repos+environment.accesstoken).subscribe(data => {
      this.userrepository=data

    })
  }
  //https://api.github.com/users/daniel-montet?access_token=043586e9c75ac64b8b0b4007fdc449d18a2d168c

  getname(){
    this.http.get<ApiResponse>(environment.apiUrl+environment.users+this.inputname+environment.accesstoken).subscribe(data => {
      this.image = data.avatar_url;
      this.name = data.name;
      this.email = data.email;
      this.public_repos = data.public_repos;
      this.followers = data.followers;
      this.created_at = data.created_at;

    })
  }

  logout() {
    this.authservice.logout()
  }

  ngOnInit() {}



}


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
  image;
  name;
  email;
  public_repos;
  followers;
  created_at;
  repos_url;//

  username;
  inputname;
  repositoryname;

  // input(value:string){
  //   value=this.inputname
  //   return value
  // }
  inputchoice: Search[];
  choiceselected:number;
  userrepository:any;

  constructor(public gH: GithubServiceService, private http: HttpClient, private authservice: AuthenticateService) { }

checkchoice(){

}

  displayname() {

    this.http.get<ApiResponse>(environment.apiUrl + environment.users + this.inputname + environment.accesstoken).subscribe(data => {
      this.image = data.avatar_url;
      this.name = data.name;
      this.email = data.email;
      this.public_repos = data.public_repos;
      this.followers = data.followers;
      this.created_at = data.created_at;
      this.repos_url = data.repos_url;

    })
  }

  // showrepo(){

  // }

  // getUser(){
  //   return this.http.get<ApiResponse>(environment.apiUrl+environment.user+this.inputname+environment.accesstoken)
  //  }
  // production: false,
  // apiUrl:"https://api.github.com/",
  // users:"users/",
  // repositories:"repositories",
  // accesstoken:"?access_token=b5ac045230c461971af93fa5d3a2129d75961c94",
  // repos:"/repos/"
  // GET /users/:username/repos
  //GET /user/repos
  //https://api.github.com/repos/daniel-montet/portfolio?access_token=b5ac045230c461971af93fa5d3a2129d75961c94
  //https://api.github.com/repos/Daniel-Montet/portfolio?access_token=b5ac045230c461971af93fa5d3a2129d75961c94"

  getRepo() {
    this.http.get<ApiResponse>(environment.apiUrl + environment.repos +this.inputname+'/portfolio'+environment.accesstoken).subscribe(data => {
      this.image = data.avatar_url;
      this.name = data.name;
      this.email = data.email;
      this.public_repos = data.public_repos;
      this.followers = data.followers;
      this.created_at = data.created_at;

    })
  }

  getuserrepos(){
    this.http.get(environment.apiUrl + environment.users +this.inputname+environment.repos+environment.accesstoken).subscribe(data => {
      this.userrepository=data

    })
  }

  logout() {
    this.authservice.logout()
  }

  ngOnInit() {

    // this.inputchoice=[
    //   {id:1,name:"username"},
    //   {id:2,name:"repository"}
    // ];
    // this.choiceselected=1;
  }


}


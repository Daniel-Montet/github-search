import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'departments', component: UserComponent},
  {path: 'departments', component: RepositoryComponent},
  {path: '**', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserComponent,RepositoryComponent,PagenotfoundComponent]

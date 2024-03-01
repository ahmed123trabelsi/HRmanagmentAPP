import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
{path: '',loadChildren:()=>import('./auth/auth.module').then(x => x.AuthModule)},
{path: 'home',loadChildren:()=>import('./home/home.module').then(x => x.HomeModule)},
{path: 'projects',loadChildren:()=>import('./projects/projects.module').then(x => x.ProjectsModule)},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

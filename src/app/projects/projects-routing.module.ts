import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeprojetcsComponent } from './listeprojetcs/listeprojetcs.component';

const routes: Routes = [{path:'', component:ListeprojetcsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

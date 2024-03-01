import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ListeprojetcsComponent } from './listeprojetcs/listeprojetcs.component';


@NgModule({
  declarations: [
    ListeprojetcsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorDetailComponent } from './professor-detail/professor-detail.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';

const routes: Routes = [
  {
    path: '',
    component:ProfessorDetailComponent
  },
  {
    path: 'professor-list',
    component:ProfessorListComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }


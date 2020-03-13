import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ProfessorDetailComponent } from './professor-detail/professor-detail.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';

const routes: Routes = [

  {path : 'student-detail',component:StudentDetailComponent},
  {path : 'student-detail/:id',component:StudentDetailComponent},
  {path : 'student-list',component:StudentListComponent},
  {path : 'professor-detail',component:ProfessorDetailComponent},
  {path : 'professor-detail/:id',component:ProfessorDetailComponent},
  {path : 'professor-list',component:ProfessorListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ StudentDetailComponent,StudentListComponent]

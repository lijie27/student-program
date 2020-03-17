import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'professor-detail',
   loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule)
  },
  {
    path: 'professor-detail/:id',
   loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule)
  },
  {
    path: 'professor-list',
   loadChildren: () => import('./faculty/faculty.module').then(l=> l.FacultyModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


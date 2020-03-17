import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfessorDetailComponent} from './professor-detail/professor-detail.component'
import {ProfessorListComponent} from './professor-list/professor-list.component'
import {ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProfessorRoutingModule} from './faculty-routing.module'
@NgModule({
  declarations: [ProfessorDetailComponent,ProfessorListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfessorRoutingModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger'
    }),
  ],
})
export class FacultyModule { }

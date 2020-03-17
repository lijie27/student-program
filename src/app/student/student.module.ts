import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentDetailComponent} from './student-detail/student-detail.component'
import {StudentListComponent} from './student-list/student-list.component'
import {StudentRoutingModule} from './student-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ConfirmationPopoverModule } from 'angular-confirmation-popover';
@NgModule({
  declarations: [StudentDetailComponent,StudentListComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger'
    }),
  ],

})
export class StudentModule { }

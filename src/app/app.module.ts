import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StudentService} from './student.service';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ProfessorDetailComponent } from './professor-detail/professor-detail.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { ProfessorService } from './professor.service';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailComponent,
    routingComponents,
    MessagesComponent,
    ProfessorDetailComponent,
    ProfessorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    HttpClientModule,
    NavbarModule, WavesModule, ButtonsModule,
    MaterialModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger'
    }),

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    BrowserAnimationsModule,
  ],
  providers: [StudentService,ProfessorService],
  bootstrap: [AppComponent]
})
export class AppModule { }




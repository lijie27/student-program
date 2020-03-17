import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {StudentService} from './service/student.service';
import { ProfessorService } from './service/professor.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { MaterialModule } from './material.module';

import {FacultyModule} from './faculty/faculty.module';
import {StudentModule} from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FacultyModule,
    MaterialModule,
    StudentModule,
    AppRoutingModule,
    BsDropdownModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    BrowserAnimationsModule,
  ],
  providers: [StudentService,ProfessorService],
  bootstrap: [AppComponent]
})
export class AppModule { }




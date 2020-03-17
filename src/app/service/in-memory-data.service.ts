import { InMemoryDbService } from 'angular-in-memory-web-api';
import {IStudent,IProfessor} from '../college';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    var students = [
  {"id":1,"name":"John","age":22,"subject":"IT","education":"Diploma"},
  {"id":2,"name":"Austine","age":26,"subject":"Business","education":"Degree"},
  {"id":3,"name":"Samantha","age":24,"subject":"Account","education":"Diploma"},
  {"id":4,"name":"Lily","age":25,"subject":"IT","education":"Degree"},
  {"id":5,"name":"Ken","age":19,"subject":"Account","education":"Diploma"},
    ];

    var professors = [
      {  "id":1, "name":"Dr. Lim","faculty":"FOCS","subject":"IT"},
      {  "id":2, "name":"Professor Anthony","faculty":"FASC","subject":"Account"},
      {  "id":3, "name":"Ms. Pua","faculty":"FAFB","subject":"Business"}
    ];
    return {students,professors};
  }


   genId(students: IStudent[]): number {
      return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;
    }

    genIdP(professors: IProfessor[]): number {
      return professors.length > 0 ? Math.max(...professors.map(professors => professors.id)) +1 : 1;
    }


  constructor() { }
}

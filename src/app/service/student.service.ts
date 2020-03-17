import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { IStudent, IProfessor } from "../college";
import { Observable, of, forkJoin, Subject } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { ProfessorService } from "./professor.service";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  private _url = "api/students";

  constructor(
    private _http: HttpClient,
    private _professorService: ProfessorService
  ) {}

  delete(student: IStudent | number): Observable<IStudent> {
    const id = typeof student === "number" ? student : student.id;
    const url = `${this._url}/${id}`;
    return this._http.delete<IStudent>(url);
  }

  getStudents(): Observable<IStudent[]> {
    return forkJoin(
      this._professorService.getProfessors(),
      this._http.get<IStudent[]>(this._url)
    ).pipe(
      map(([professors, students]: [IProfessor[], IStudent[]]) => {
        students.forEach(x => {
          const professor = professors.find(p => p.subject == x.subject);
          x.professor = professor;
        });
        return students;
      })
    );
  }


  getStudent(id: number): Observable<IStudent> {
    const url = `${this._url}/${id}`;
    return forkJoin(
      this._professorService.getProfessors(),
      this._http.get<IStudent>(url)
    ).pipe(
      map(([professors, student]: [IProfessor[], IStudent]) => {
        const professor = professors.find(p => p.subject == student.subject);
        student.professor = professor ;
        return student;
      })
    );
  }

  addStudent(student: IStudent): Observable<any> {
    return this._http.post<any>(this._url, student);
  }
  updateStudent(student: IStudent): Observable<any> {
    return this._http.put<any>(this._url, student);
  }
}

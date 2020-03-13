import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { IStudent } from "./college";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { MessageService } from "./message.service";
@Injectable({
  providedIn: "root"
})
export class StudentService {
  private _url = "api/students";

  constructor(
    private _http: HttpClient,
    private messageService: MessageService
  ) {}

  delete(student: IStudent | number): Observable<IStudent> {
    const id = typeof student === "number" ? student : student.id;
    const url = `${this._url}/${id}`;
    return this._http.delete<IStudent>(url);
  }

  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }

  getStudents(): Observable<IStudent[]> {
    return this._http.get<IStudent[]>(this._url);
  }



  getStudent(id: number): Observable<IStudent> {
    const url = `${this._url}/${id}`;
    return this._http.get<IStudent>(url);
  }

  addStudent(student: IStudent): Observable<any> {
    return this._http.post<any>(this._url, student);
  }
  updateStudent(student: IStudent): Observable<any> {
    return this._http.put<any>(this._url, student);
  }


}

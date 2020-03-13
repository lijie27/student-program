import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { IProfessor,IStudent } from "./college";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { MessageService } from "./message.service";
@Injectable({
  providedIn: 'root'
})


export class ProfessorService {
  professors:IProfessor[];
  private _url = "api/professors";

  constructor(
    private _http: HttpClient,
    private messageService: MessageService
  ) {}

  delete(professor: IProfessor | number): Observable<IProfessor> {
    const id = typeof professor === "number" ? professor : professor.id;
    const url = `${this._url}/${id}`;

    return this._http.delete<IProfessor>(url);
  }

  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }

  getProfessors(): Observable<IProfessor[]> {
    return this._http.get<IProfessor[]>(this._url);
  }

  getProfessor(id: number): Observable<IProfessor> {
    const url = `${this._url}/${id}`;
    return this._http.get<IProfessor>(url);
  }



  addProfessor(professor: IProfessor): Observable<any> {
    return this._http.post<any>(this._url, professor);
  }
  updateProfessor(professor: IProfessor): Observable<any> {
    return this._http.put<any>(this._url, professor);
  }
}


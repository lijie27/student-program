import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { IProfessor } from "../../college";
import { ProfessorService } from '../../service/professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  professors: IProfessor[];
  public successMsg: string;
  public popoverTitle : string = 'Confirmation Dialog';
  public popoverMessage : string = 'Are you sure you want to delete this professor?';
  public confirmClicked : boolean = false;
  public cancelClicked : boolean = false;


  constructor(
    private _professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this._professorService
      .getProfessors()
      .subscribe(data => (this.professors = data));
  }


  delete(professor: IProfessor): void {
    this.professors = this.professors.filter(s => s !== professor);
    this._professorService
      .delete(professor)
      .subscribe(
        data =>
          (this.successMsg = "You have deleted professor with ID " + professor.id)
      );
  }

  private loadAllUsers() {
    this._professorService.getProfessors().subscribe(professors => {
      this.professors = professors;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup,Validators } from "@angular/forms";
import { IStudent,IProfessor } from "/Users/lijie.cheong/Desktop/New_show/student/src/app/college";
import { ProfessorService } from '../../service/professor.service';

@Component({
  selector: 'app-professor-detail',
  templateUrl: './professor-detail.component.html',
  styleUrls: ['./professor-detail.component.css']
})
export class ProfessorDetailComponent implements OnInit {

    professors: IProfessor[];
    professor: IProfessor;
    registerFormP: FormGroup;
    submitted = false;

    get name(){
      return this.registerFormP.get('name');
    }
    get subject(){
      return this.registerFormP.get('subject');
    }
    get faculty(){
      return this.registerFormP.get('faculty');
    }


    constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private _professorService: ProfessorService
    ) { }



    ngOnInit() {

      this.getProfessor();

      this.registerFormP = this.formBuilder.group({
        ID: [""],
        name: ["",[Validators.required,Validators.minLength(2)]],
        subject: ["",[Validators.required]],
        faculty: ["",[Validators.required]]
      });
    }

    getProfessor(): void {
      const id = +this.route.snapshot.paramMap.get("id");
      this._professorService
        .getProfessor(id)
        .subscribe(professor => (this.professor = professor));
    }


    onSubmit() {
      this._professorService
        .addProfessor(this.registerFormP.value)
        .subscribe(data => {
          this.router.navigate(["/professor-list"]);
        });
    }

    save(): void {
      this._professorService.updateProfessor(this.professor).subscribe(data => {
        this.router.navigate(["/professor-list"]);
   });
    }
  }




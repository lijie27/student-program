import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StudentService } from "../../service/student.service";
import { FormBuilder, FormGroup,Validators } from "@angular/forms";
import { IStudent } from "../../college";

@Component({
  selector: "app-student-detail",
  templateUrl: "./student-detail.component.html",
  styleUrls: ["./student-detail.component.css"]
})
export class StudentDetailComponent implements OnInit {
  students: IStudent[];
  student: IStudent;
  registerForm: FormGroup;
  submitted = false;

  get name(){
    return this.registerForm.get('name');
  }
  get age(){
    return this.registerForm.get('age');
  }
  get subject(){
    return this.registerForm.get('subject');
  }
  get education(){
    return this.registerForm.get('education');
  }


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _studentService: StudentService
  ) { }



  ngOnInit() {

    this.getStudent();
    this.registerForm = this.formBuilder.group({
      ID: [""],
      name: ["",[Validators.required,Validators.minLength(2)]],
      age: ["",[Validators.required,Validators.min(18)]],
      subject: ["",[Validators.required]],
      education: ["",[Validators.required]]
    });
  }

  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this._studentService
      .getStudent(id)
      .subscribe(student => (this.student = student));
  }

  onSubmit() {
    this._studentService
      .addStudent(this.registerForm.value)
      .subscribe(data => {
        this.router.navigate(["/student-list"]);
      });
  }

  // getProfessor(){
  //   if (this.student.subject === "IT"){
  //     this.student.professor === "Kenny";
  //   }
  //   return this.student.professor;
  // }

  save(): void {
    this._studentService.updateStudent(this.student).subscribe(data => {
      this.router.navigate(["/student-list"]);
 });
  }
}


//  add(id:number,name:string,age:number) {
//    this._studentService.addStudent({ id,name,age } as IStudent)
//      .subscribe(data => {
//       this.router.navigate(['/student-list']);
//      });
//  }

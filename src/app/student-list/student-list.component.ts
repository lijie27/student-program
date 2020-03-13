import { Component, OnInit, ViewChild } from "@angular/core";
import { StudentService } from "../student.service";
import { ActivatedRoute, Router } from "@angular/router";
import { IStudent, IProfessor } from "../college";
import { StudentDetailComponent } from "../student-detail/student-detail.component";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})

export class StudentListComponent implements OnInit {
  students: IStudent[];
  student : IStudent;
  professors : IProfessor[];
  professor : IProfessor;
  public successMsg: string;
  public popoverTitle : string = 'Confirmation Dialog';
  public popoverMessage : string = 'Are you sure you want to delete this student?';
  public confirmClicked : boolean = false;
  public cancelClicked : boolean = false;


  @ViewChild(StudentDetailComponent) child;

  constructor(
    private _studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,

  ) {}

  ngOnInit() {
    this._studentService
      .getStudents()
      .subscribe(data => (this.students = data));
    this.successMsg = this.child.successMsg;
    const subject = this.student.professor.subject;
  }


  delete(student: IStudent): void {
    this.students = this.students.filter(s => s !== student);
    this._studentService
      .delete(student)
      .subscribe(
        data =>
          (this.successMsg = "You have deleted student with ID " + student.id)
      );
  }

  private loadAllUsers() {
    this._studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(
    public studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.students = this.studentService.getAllStudents();
  }

  deleteOneStudent(studentId: number) {
    this.students = this.students.filter(student => student.id != studentId);
    this.studentService.deleteOneStudent(studentId);
  }
}

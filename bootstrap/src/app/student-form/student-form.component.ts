import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student!: Student;
  students: Student[] = [];
  passed: string = "Reprovado"

  studentForm = this.fb.group({
    name: ["", [
      Validators.minLength(5),
      Validators.required
    ]],
    score1: ["", [
      Validators.max(10),
      Validators.min(0),
      Validators.required
    ]],
    score2: ["", [
      Validators.max(10),
      Validators.min(0),
      Validators.required
    ]],
  })

  constructor(
    public studentService: StudentService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.student = new Student();
    this.studentService.getAllStudents();
  }

  getAverage() {
    this.student.average = (this.student?.score1! + this.student?.score2!) / 2
    return;
  }

  getLastId() {
    const students = this.studentService.getAllStudents();
    const lastId: number = Math.max(...students.map((student: any) => student.id));
    return lastId;
  }

  addStudent() {
    const id: number = this.getLastId() + 1;
    this.student.average = (this.student?.score1! + this.student?.score2!) / 2
    this.student.status = this.student.average >= 7 ? true : false
    const student: Student = { ...this.student!, id }
    this.studentService.addStudent(student);
    this.studentForm.reset();
  }

}

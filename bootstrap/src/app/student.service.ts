import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [];
  student: Student | undefined;

  constructor() { }

  getAllStudents() {
    this.students = JSON.parse(localStorage.getItem("students") || "[]");
    return this.students
  }

  getOneStudent(studentId: number) {
    this.getAllStudents();
    this.student = this.students.find(student => student.id == studentId);
    return this.student
  }

  addStudent(student: Student) {
    this.getAllStudents();
    this.students.push(student);
    localStorage.setItem("students", JSON.stringify(this.students));
  }

  deleteOneStudent(studentId: number) {
    this.getAllStudents();
    this.students = this.students.filter(student => student.id != studentId);
    localStorage.setItem("students", JSON.stringify(this.students));
  }

  deleteAllStudents() {
    this.students = [];
    localStorage.removeItem("students");
  }
}

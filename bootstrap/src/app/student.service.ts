import { Injectable } from '@angular/core';
import { IStudent } from './student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: IStudent[] = [];
  student: IStudent | undefined;

  constructor() { }

  getAllStudents() {
    return JSON.parse(localStorage.getItem("students") || "[]");
  }

  getOneStudent(studentId: number) {
    return this.students.find(student => student.id == studentId);
  }

  addStudent(student: IStudent) {
    this.students.push(student);
    localStorage.setItem("students", JSON.stringify(this.students));
  }

  deleteOneStudent(studentId: number) {
    this.students = this.students.filter(student => student.id != studentId);
    localStorage.setItem("students", JSON.stringify(this.students));
  }

  deleteAllStudents() {
    this.students = [];
    localStorage.removeItem("students");
  }
}

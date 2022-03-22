import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: any;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  onDelete(id: number|string) {
    this.studentService.deleteStudent(id).subscribe((data) => {
      this.onGetList();
    });
  }

}

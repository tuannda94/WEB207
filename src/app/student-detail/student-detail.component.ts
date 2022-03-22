import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  id: any;
  student: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.studentService.getStudent(this.id).subscribe(data => {
      this.student = data;
    });
  }

}

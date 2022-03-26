import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  id: string|undefined;
  student: any;
  constructor(
    private studentService: StudentService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.studentService.getStudent(this.id).subscribe(data => {
        this.student = data;
      })
    } else {
      this.student = {
        name: '',
        class: ''
      }
    }
  }

  onSubmit(obj : {name: string, class: string}) {
    if (this.id) {
      return this.studentService.updateStudent(this.id, obj).subscribe(data => {
        this.router.navigate(['/students', this.id]);
      });
    }

    return this.studentService.createStudent(obj).subscribe(data => {
      this.router.navigate(['/students']);
    });
  }

}

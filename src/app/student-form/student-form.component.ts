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
  avatarBase64: any;

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
    const submitData = {
      ...obj,
      avatar: this.avatarBase64
    };
    if (this.id) {
      return this.studentService.updateStudent(this.id, submitData).subscribe(data => {
        this.router.navigate(['/admin/student', this.id]);
      });
    }

    return this.studentService.createStudent(submitData).subscribe(data => {
      this.router.navigate(['/admin/student']);
    });
  }

  resultString (e:any) {
    if (e && e.target && typeof e.target.result == 'string') {
      return e.target.result;
    }

    return '';
  }

  changeAvatar(event :any) {
    const arrayImageTypes = ['image/png', 'image/jpg'];
    const file = event.target.files[0];
    if (file.size > 500000) {
      return alert('Kích thước file quá lớn');
    } else if (!arrayImageTypes.includes(file.type)) {
      return alert('Kiểu dữ liệu không phù hợp');
    }

    console.log(file.size, file.type);
    // 1. Định nghĩa 1 thể hiện của FileReader để đọc file
    const reader = new FileReader();
    // 2. Định nghĩa phương thức đọc file
    reader.onload = (e) => {
      this.avatarBase64 = e.target?.result;
      const image = new Image();
      image.src = this.resultString(e);

      console.log(image.width, image.height);
    }
    // 3. Đây là lúc bắt đầu đọc file để chạy phần 2.
    reader.readAsDataURL(file);
  }
}

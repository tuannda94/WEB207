import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  imageBase64: any;
  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      image: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  changeImage(event: any) {
    console.log(event.target.files);

    // 1. Định nghĩa việc đọc file
    const reader = new FileReader();
    // 2. Định nghĩa quá trình đọc file
    reader.onload = (e) => {
      this.imageBase64 = e.target?.result;
    };

    // 3. Đọc file lấy từ input
    reader.readAsDataURL(event.target.files[0]);

  }
  onSubmit() {
    console.log(this.imageBase64);
  }

}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  imageBase64: any;
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      // tên_trường: giá trị là thể hiện của FormControl(gt_mặc_định)
      username: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          this.checkUsername
      ]),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
    });
  }

  ngOnInit(): void {
  }

  checkUsername (control: AbstractControl) :ValidationErrors|null {
    const username = control.value;
    if (!username.includes('tuan')) {
      return {hasName: true}; // obj này sẽ được trả về trong errors
    }
    return null;
  }

  onSubmit () {
    console.log(this.imageBase64);
  }

  changeFile (event: any) {
    if(event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {

        this.imageBase64 = e.target?.result;
        console.log(e.target?.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}

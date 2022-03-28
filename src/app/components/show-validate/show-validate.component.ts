import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface ERROR {
  hasName: string,
    required: string,
    minlength:string,
    [key:string]: string
};

@Component({
  selector: 'app-show-validate',
  templateUrl: './show-validate.component.html',
  styleUrls: ['./show-validate.component.css']
})
export class ShowValidateComponent implements OnInit {
  // Nếu không truyền vào input thì biến sẽ là tên biến bên cha truyền sang
  // Nếu có thì truyền vào tên biến bên kia truyền và đặt biến mới
  @Input('formField') formData: any;
  @Input() key: string;

  constructor() {
    this.key = '';
  }

  ngOnInit(): void {
  }

}

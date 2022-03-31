import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent implements OnInit {
  // Input có thể truyền vào tên biến nhận được từ cha
  // Nếu không truyền thì biến của Input khai báo chính là tên đó
  // Nếu truyền thì có thể gán 1 tên mới
  // @Input() message: string;
  // @Input('message') mes: string;
  @Input() formField: any;
  @Input() key: string;

  constructor() {
    // this.message = '';
    // this.mes = '';
    this.key = '';
  }

  ngOnInit(): void {
  }

}

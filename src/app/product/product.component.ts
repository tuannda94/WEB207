import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newProduct = {
    name: '',
    price: 0,
    desc: ''
  };

  onSubmit(product :any) {
    console.log(product);
  }
}

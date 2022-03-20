import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

type PRODUCT_TYPE = {
  id: number,
  name: string,
  desc: string,
  price: number
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any;
  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
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

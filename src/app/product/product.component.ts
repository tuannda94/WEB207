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
    this.onGetList();
  }

  newProduct = {
    name: '',
    price: 0,
    desc: ''
  };

  onSubmit(product :any) {
    console.log(product);
  }

  onGetList() {
    this.ps.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  onDelete(id: number|string) {
    if (id) {
      this.ps.deleteProduct(id).subscribe(data => {
        this.onGetList();
      });
    }
  }

  parentChangeStatus(newStatus:number, productId:number) {
    const currentProduct = this.products.find((product:any) =>
      product.id === productId
    );

    if (currentProduct) {
      this.ps.updateProduct(
        productId,
        {
          ...currentProduct,
          status: newStatus
        }
      ).subscribe((data) => {
        this.onGetList();
      });
    }


  }
}

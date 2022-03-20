import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productDetail:any;
  id:any;
  constructor(
    private router: ActivatedRoute,
    private ps: ProductService
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.ps.getProduct(this.id).subscribe(data => {
      this.productDetail = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail:any;
  id :any;
  constructor(
    private ps: ProductService,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.ps.getProduct(this.id).subscribe(data => {
      this.productDetail = data;
      console.log(this.productDetail);
    })
  }

}

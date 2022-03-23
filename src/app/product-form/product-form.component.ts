import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
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
    private activRoute: ActivatedRoute, // su dung de lay id tren url
    private router: Router, // su dung de dieu huong
    private ps: ProductService
  ) { }

  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id'];
    // console.log(this.id);
    // Neu co id ~ dang chinh sua thi moi call API lay chi tiet
    // Khong thi thoi
    if (this.id !== undefined) {
      this.ps.getProduct(this.id).subscribe(data => {
        this.productDetail = data;
      })
    } else {
      this.productDetail = {
        name: '',
        desc: '',
        price: 0
      };
    }
  }

  onUpdate (obj :any) {
    // Nhan du lieu tu form, tien hanh call API
    // if (obj.id !== undefined) {
    //   this.ps.updateProduct(this.id, obj).subscribe();
    // } else {
    //   this.ps.createProduct(obj).subscribe();
    // }
    // // Tien hanh dieu huong ve trang danh sach
    // this.router.navigate(['/product']);
  }
}

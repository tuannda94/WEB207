import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-name',
  templateUrl: './product-name.component.html',
  styleUrls: ['./product-name.component.css']
})
export class ProductNameComponent implements OnInit {
  @Input() name: string;
  constructor() {
    this.name = '';
  }

  ngOnInit(): void {
    this.name = this.name.toUpperCase();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product } from '../product';

@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm, {static: true}) productForm: NgForm;

  errorMessage: string;
  product = { id: 1, productName: 'test', productCode: 'test' } as Product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}

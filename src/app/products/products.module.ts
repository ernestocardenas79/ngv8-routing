import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';

@NgModule({
  declarations: [ProductDetailComponent, ProductListComponent, ProductEditComponent, ProductEditInfoComponent, ProductEditTagsComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }

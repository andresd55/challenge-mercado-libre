import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import es from '@angular/common/locales/es';
import { environment } from 'src/environments/environment';
import { ItemBreadCrumbDto } from 'src/app/shared/models/item-breadcrumb-dto';
import { ProductDto } from 'src/app/shared/models/producto-dto';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit  {
  itemsBreadcrumb:ItemBreadCrumbDto[] = environment.itemsBreadcrumb;
  product:ProductDto = JSON.parse(localStorage.getItem('product'));

  ngOnInit() {
    registerLocaleData( es );
  }
}

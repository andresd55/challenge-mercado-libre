import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProductDto } from 'src/app/shared/models/producto-dto';
import { ItemBreadCrumbDto } from 'src/app/shared/models/item-breadcrumb-dto';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: []
})
export class ProductsListComponent implements OnInit {
  itemsBreadcrumb:ItemBreadCrumbDto[] = environment.itemsBreadcrumb;
  products:ProductDto[] = environment.products;

  constructor( private router: Router ) { }

  ngOnInit() {
    registerLocaleData( es );
  }

  viewProductDetail(data) {
    localStorage.setItem('product', JSON.stringify(data));
    this.router.navigate(['/home/product_detail']);
  }

}
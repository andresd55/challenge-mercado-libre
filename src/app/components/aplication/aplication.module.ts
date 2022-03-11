import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from '../ui/footer/footer.component';
import { NavbarComponent } from '../ui/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core/core.module';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';
import { AppComponent } from 'src/app/app.component';
import { ProductsListComponent } from '../products/products-list/products-list.component';
import { BreadcrumbModule } from 'src/app/shared/framework-ui/custom/breadcrumb/public_api';
import { ImageDirective } from 'src/app/shared/framework-ui/custom/appImage/appImage.directive';
import { ButtonCustomModule } from 'src/app/shared/framework-ui/custom/button/button.component';
import { SearchSelectorModule } from 'src/app/shared/framework-ui/custom/search-selector/search-selector.component';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ImageDirective,
    ProductDetailComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    CoreModule,
    BreadcrumbModule,
    ButtonCustomModule,
    SearchSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AplicationModule { }


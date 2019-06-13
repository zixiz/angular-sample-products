import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ConverToSpacesPipe } from './conver-to-spaces.pipe';
import { StarComponent } from './star/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router'
import { ProductDetailsGuard } from './products/product-details.guard';
import { AddProductsComponent } from './add-products/add-products.component';
import { FormReactivComponent } from './form-reactiv/form-reactiv.component';
import { RealFormReactiveComponent } from './real-form-reactive/real-form-reactive.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConverToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    AddProductsComponent,
    FormReactivComponent,
    RealFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products',component:ProductsComponent},
      {path:'products/:id',component:ProductDetailComponent,canActivate:[ProductDetailsGuard]},
      {path:'welcome',component:WelcomeComponent},
      {path:'form',component:FormReactivComponent},
      {path:'reactiveform',component:RealFormReactiveComponent},
      {path:'add',component:AddProductsComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ],{useHash:false})
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

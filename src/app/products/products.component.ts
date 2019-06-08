import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.interface';
import { ServicesService } from '../myservice/services.service';


@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productServics:ServicesService ) { 
   }

  ngOnInit() {
    this.productServics.getProducts().subscribe(p=>{
      this.products = p;
      this.filterProducts=this.products;
    });
    
    this.listFilter = '';
  }
  showImage:boolean=false;
  pageTitle:string = 'Product List'
  _listFilter:string;
  filterProducts:IProduct[];
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string):string{
    this._listFilter=value;
    this.filterProducts=this.listFilter ? this.performFilter(this.listFilter):this.products;
  }

  performFilter(filterby:string):IProduct[]{
    filterby=filterby.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=> product.productName.toLocaleLowerCase().indexOf(filterby) !== -1);
  }

  toggleImage():void{
    this.showImage = !this.showImage;
  }

  onRatingClicked(message:string):void{
    this.pageTitle = 'Product List' + message;
  }
  
  products:IProduct[]=[];

  

}

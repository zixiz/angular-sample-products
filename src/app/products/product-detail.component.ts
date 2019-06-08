import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.interface';
import {ActivatedRoute, Router} from '@angular/router'
import { ServicesService } from '../myservice/services.service';
@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productd: IProduct;
  errorMessage:string;
  pageTitle:string= 'Product Detail';
  constructor(private route:ActivatedRoute,private router:Router,private productServics:ServicesService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productServics.getProduct(id).subscribe(data=>this.productd=data);
  }

  goBack():void{
    this.router.navigate(['/products']);
  }
}

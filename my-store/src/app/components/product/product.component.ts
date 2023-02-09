import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product={
    id:'',
    image: '',
    price:0,
    name:''
  }
  @Output() addedProduct= new EventEmitter();

  constructor() { }

  ngOnInit():void{

  }
  onAddToCart(){
    this.addedProduct.emit(this.product);
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import {StoreService} from '../../services/store.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
//lista de productos que yo he agregado a mi bolsa
myShoppingCart:Product[]=[];
total=0;
//familia de productos, renderizar desde el padre para poder reutilizarlo
  products: Product[]=[
    {
      id:'1',
      price: 565,
      image: './assets/images/toy.jpg',
      name: 'EL mejor juguete'
    },
    {
      name: 'Bicicleta casi nueva',
      id:'2',
      price: 356,
      image: './assets/images/bike.jpg',
      
      
    },
    {
      id:'3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    }
  ]

  constructor( private storeService:StoreService){
   
  }

   ngOnInit(): void {
     
   }

   onAddTShoppingCart(product: Product){
    this.myShoppingCart.push(product);
    this.total= this.myShoppingCart.reduce((sum,item) =>sum+item.price,0);
   }

}

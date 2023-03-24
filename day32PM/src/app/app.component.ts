import { Component, OnInit } from '@angular/core';
import { Cart, ItemOrder, List } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day32PM';
  
  // Array to capture all selections
  selectionBasket: ItemOrder[] = [];


  // Function required to successfully transfer ItemOrder data from Child to Parent
  addItemToCart(selection: ItemOrder){
    console.info('selection: ', selection)
    // if item was selected before
    const item = this.selectionBasket.find(i=> i.item == selection.item)

    // if item != null / true
    if(!!item)
      // add to existing quantity
      item.quantity += selection.quantity
      else
      this.selectionBasket = [...this.selectionBasket, selection]
      // this.selectionBasket.push(selection)

    console.log(">>> selectionBasket", this.selectionBasket)
  }


  // Array to capture all cart checkouts
  checkoutBasket: Cart[] = []

  addCheckoutToList(cart: Cart){
    // add selectionBasket to cart.itemOrders
    console.info('2nd check for selectionBasket: ',this.selectionBasket)
    cart.itemOrders = cart.itemOrders.concat(this.selectionBasket)
    // console.info('itemOrders: ', cart.itemOrders)
    console.info('cart: ', cart)
    // add to checkout basket
    this.checkoutBasket = [...this.checkoutBasket, cart]
    // this.checkoutBasket.push(cart)
    console.log(">>> checkout basket: ", this.checkoutBasket)
  }
}

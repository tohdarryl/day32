import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Cart, ItemOrder } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  @Input()
  itemOrders!: ItemOrder[]

  cartForm!:FormGroup
  itemArray!: FormArray

  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {
     this.itemArray = this.fb.array([], [Validators.minLength(1)])
      this.cartForm = this.fb.group({
        name: this.fb.control<string>('', [Validators.required]),
        address: this.fb.control<string>('', [Validators.required]),
        delivery: this.fb.control<string>('', [Validators.required]),
        itemOrders: this.itemArray
      })
  }

  @Output()
  onNewCart = new Subject<Cart>()

  cartCheckout(){
    // get form values as Cart Object
    const cart = this.cartForm.value as Cart
    // to parse data to Parent class
    this.onNewCart.next(cart)
    this.cartForm.reset()
  }





}

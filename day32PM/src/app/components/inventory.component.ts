import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Item, ItemOrder, itemPrice, List } from '../models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit{
// Step 1: create object of type 'FormGroup'
selectForm!: FormGroup
constructor(private fb: FormBuilder){ }

@Input()
list!: List

iP = itemPrice;
order!: ItemOrder;

// Step 4: Create event to transfer to Parent
@Output()
onNewItem = new Subject<ItemOrder>()

// Step 3: Bind form with model on initialization
ngOnInit(): void {
  this.selectForm = this.createSelectForm();
  // Must instantiate to get values from model
  this.list = new List();
  console.log(">>> list ",this.list)
}

// Step 2: Create model to bind to form to receive inputs and do validation checks
//         formControlName="" in html should be the same as those in this function
private createSelectForm(): FormGroup{
  return this.fb.group({
    item: this.fb.control<string>('', [Validators.required]),
    unitPrice: this.fb.control<string>('', [Validators.required]),
    quantity: this.fb.control<number>(1, [Validators.required, Validators.min(1)]),
  })
}

// Step 5: create function to set data upon clicking on picture
selectItem(item: string){
  // To override text boxes values in html
  const itemCtrl = this.selectForm.get('item') as FormControl
  const unitPriceCtrl = this.selectForm.get('unitPrice') as FormControl
  // Set value in 'Item' and 'Unit Price' text boxes of html
  itemCtrl.setValue(item)
  unitPriceCtrl.setValue(this.findItem(item))

}
// Step 5: 
private findItem(item: string) {
  return this.iP.get(item)
}

// Step 6: Bind values in html to ItemOrder attributes
addToCart() {
  const selection = this.selectForm.value as ItemOrder
  // fires the event, transfers data to parent
  this.onNewItem.next(selection)
  // resets data in form
  this.selectForm.reset()
}




}

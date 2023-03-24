import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InventoryComponent } from './components/inventory.component';
import { CartComponent } from './components/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    // To import Form modules
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

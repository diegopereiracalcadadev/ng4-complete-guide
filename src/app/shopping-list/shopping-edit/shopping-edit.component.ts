import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild("nameInput", {static: true}) nameElementRef: ElementRef;
  @ViewChild("amountInput", {static: true}) amountElementRef: ElementRef;
  
  constructor() { }

  onAddItem() {
    const name = this.nameElementRef.nativeElement.value;
    const amount = this.amountElementRef.nativeElement.value;
    const ingredient = new Ingredient(name, +amount);
    this.ingredientAdded.emit(ingredient);
  }

  clearFields(){
    console.log("clearFields...");
    // this.name.value = '';
    // this.amount = '';

  }

}

import { Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Frango com maçã','Salgado e ácido','https://images.media-allrecipes.com/userphotos/300x300/1291543.jpg'),
    new Recipe('Quiche de Cebola','Uma delícia','https://images.media-allrecipes.com/userphotos/300x300/4497509.jpg'),
    new Recipe('Bruschetta de morango','Inacreditável...','https://images.media-allrecipes.com/userphotos/300x300/1281203.jpg')
    
  ];
  @Output() recipeWasClicked = new EventEmitter<Recipe>();
  
  constructor() { }

  onNewRecipeClick(){
    let a = "teste";
    console.log(a);
  }

  onRecipeClicked(recipe: Recipe){
    console.log("onRecipeClicked...");
    console.log(recipe);
    this.recipeWasClicked.emit(recipe);
  }

}

import { Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Recipe1','A good recipe','data:image/jpeg;base64,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')
  ];
  @Output() recipeClicked = new EventEmitter<{recipe: Recipe}>();
  
  constructor() { }

  onNewRecipeClick(){
    let a = "teste";
    console.log(a);
  }

  onRecipeClicked(event: any){
    console.log(event);
    this.recipeClicked.emit({recipe: event.recipe});
  }

}

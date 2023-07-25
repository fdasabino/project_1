import { Component } from '@angular/core';
import { RecipeModel } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: RecipeModel[] = [
    new RecipeModel(
      'A Test Recipe',
      'This is simply a test',
      'https://placehold.co/600x400'
    ),
    new RecipeModel(
      'A Test Recipe',
      'This is simply a test',
      'https://placehold.co/600x400'
    ),
  ];
}

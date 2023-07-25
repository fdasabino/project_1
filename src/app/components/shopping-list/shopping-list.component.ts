import { Component } from '@angular/core';
import { IngredientsModel } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: IngredientsModel[] = [
    new IngredientsModel('Apples', 5),
    new IngredientsModel('Tomatoes', 5),
    new IngredientsModel('Limes', 5),
  ];
}

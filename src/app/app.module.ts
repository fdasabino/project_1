import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test','http://maxpixel.freegreatpicture.com/Meat-Power-Recipe-Food-Dishes-Pork-1459693'),
  ];
  constructor() { }

  ngOnInit() {
  }

}

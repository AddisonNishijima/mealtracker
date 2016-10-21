import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `
  <div class ="meal" *ngFor="let currentMeal of childMealList">
  <meal-display [meal]="currentMeal"></meal-display>
  </div>
  `
})

export class MealListComponent {
  
}

import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  template: `
  <div id="meal">
  <h1>Name:</h1> {{ childMeal.name }}
  <h1>Details:</h1> {{ childMeal.details }}
  <h1>Calories:</h1> {{ childMeal.calories }}
  </div>
  `
})
export class MealComponent {
 @Input() childMeal: Meal;
}

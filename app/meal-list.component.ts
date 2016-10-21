import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `
  <div class ="meal" *ngFor="let currentMeal of childMealList">
  <meal-display [meal]="currentMeal"></meal-display>
  <button class="btn btn-default"(click)="editButtonHasBeenClicked(currentTask)" >Edit</button>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

}

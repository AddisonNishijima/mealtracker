import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `
  <div class="selects">
    <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="highcalorie">High Calorie</option>
    </select>
  </div>
  <div class ="meal" *ngFor="let currentMeal of childMealList | calorie: desiredCalorie">
    <meal-display
     [childMeal]="currentMeal">
    </meal-display>
    <button class="btn btn-info"(click)="editButtonHasBeenClicked(currentMeal)" >Edit</button>
  </div>
  `
})

export class MealListComponent {
  public desiredCalorie: string = "all";
  onChange(optionFromMenu) {
    this.desiredCalorie = optionFromMenu;
    console.log(this.desiredCalorie);
  }
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal){
    this.clickSender.emit(mealToEdit);
  }
}

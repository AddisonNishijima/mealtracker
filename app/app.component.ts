import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div>
  <h1>Meal Tracker</h1>
  </div>
  <div class="col-md-8">
  <h1>Meals I've Had Today</h1>
  <meal-list
  ></meal-list>
  <edit-meal
    [childSelectedMeal]="selectedMeal"
    (doneClickedSender)="finishedEditing()"
  ></edit-meal>
  </div>
  <div class="col-md-4">
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal ("strawberry yogurt granola bar", "a granola bar for breakfast yum", 150),
    new Meal ("grande chai latte", "from Starbucks", 240),
    new Meal ("ham and cheddar cracker stackers", "because nostalgia", 410),
    new Meal ("cheesy rice and broccoli", "individual size", 270)
    ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal){
    this.selectedMeal = clickedMeal;
  }
  finishedEditing(){
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}

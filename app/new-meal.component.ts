import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  template: `
  <h1>New Meal</h1>
  <div>
    <div class="form-group">
      <label>Enter New Meal Name</label>
      <input class="form-control" #newName>
    </div>
    <div class="form-group">
      <label>Enter New Meal Details</label>
      <input class="form-control" #newDetails>
    </div>
    <div class="form-group">
      <label>Enter New Meal Calories</label>
      <input type="number" class="form-control" #newCalories>
    </div>
    <button class="btn btn-success" (click)="
    addClicked(newName.value, newDetails.value, newCalories.value)">Add</button>
  </div>
  `
})
export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}

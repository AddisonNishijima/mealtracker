import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal" id="edit">
  <h1>Edit Meal</h1>
    <div>
      <div class="form-group">
        <label>Enter Meal Name</label>
        <input class="form-control" type="text" [(ngModel)]="childSelectedMeal.name">
      </div>
      <div class="form-group">
        <label>Enter Meal Details</label>
        <input class="form-control" type="text" [(ngModel)]="childSelectedMeal.details">
      </div>
      <div class="form-group">
        <label>Enter Meal Calories</label>
        <input class="form-control" type="number" [(ngModel)]="childSelectedMeal.calories">
        <button class="btn btn-success" (click)="doneClicked()">Done</button>
      </div>
    </div>
  </div>
  `
})
export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}

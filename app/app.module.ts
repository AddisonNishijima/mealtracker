import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealComponent } from './meal.component';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriePipe } from './calorie.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
     AppComponent,
     MealListComponent,
     MealComponent,
     EditMealComponent,
     NewMealComponent,
     CaloriePipe,

   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

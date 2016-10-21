import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealComponent } from './meal.component';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';


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

   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

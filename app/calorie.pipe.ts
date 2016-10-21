import {Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe ({
  name: "calorie",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], desiredCalorie) {
    var output: Meal[] = [];
    if(desiredCalorie === "highcalorie") {
      for (var i=0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    }else if (desiredCalorie === "lowcalorie") {
      for (var i=0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output
    } else {
      return input;
    }
  }
}

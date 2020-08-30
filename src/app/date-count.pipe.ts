//CUSTOM PIPES -- Let's create a pipe that will count the number of days left to the completion of a goal.
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  // We first have the @Pipe decorator that defines the name of the pipe.
  name: 'dateCount'
})


export class DateCountPipe implements PipeTransform {

  //We then have the DateCountPipe class that has a transform function that takes in a value of type any.
  // This value will be our date object from the goals.
  transform(value: any): number {
    let today: Date = new Date(); //get the current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) //returns value in milliseconds
    const secondsInDay = 86400; //60 seconds * 60minutes * 24 hours in a day
    var dateDifferenceSeconds = dateDifference * 0.001; //converts milliseconds to seconds
    var dateCounter = dateDifferenceSeconds / secondsInDay;

    if (dateCounter >= 1 && value > todayWithNoTime){
      // We have then returned the days left if the goal date has not been passed. But if it past due we post 0.
      return dateCounter;
    }else{
      return 0;
    }
  }

}

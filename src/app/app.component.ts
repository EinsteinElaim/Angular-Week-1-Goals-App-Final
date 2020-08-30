import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Goals';
  goal = 'Watching Finding Nemo 1.'

  /* We have created a property goals and attributed it to an empty String array. We have then created a constructor function and given the empty goals array 3 string values so it is no longer empty. */

  goals: string[]; 


  /* A constructor function defines the logic that should be executed once the class is instantiated. In this case, when the AppComponent is initiated, it creates an instance of the goals array with the 3 values that we have assigned it. */

  constructor(){
    this.goals = ['Watch Finding Nemo 2', 'Buy cookies', 'Get new phone case']
  }

}

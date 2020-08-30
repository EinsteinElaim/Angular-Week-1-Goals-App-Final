// At the top, we have imported the Output and EventEmitter functions from @angular/core.
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//importing the goal class tha will be used as a blueprint for creating new goals on the form
import { Goal } from '../goal'; 

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goal(0,"","",new Date());


  // We have then created the addGoal event emitter object which is of type Goal that will emit an event to the parent component.
  @Output() addGoal = new EventEmitter<Goal>();


  // We have then created the submitGoal() function in which we use the emit method and pass in the new goal object we want to create. 
  submitGoal(){
    this.addGoal.emit(this.newGoal)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

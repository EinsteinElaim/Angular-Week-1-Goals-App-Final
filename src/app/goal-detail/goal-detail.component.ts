//we also import Input which allows us to do Input property binding.
//we have imported Output decorator and the EventEmitter class 
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/* Input Property Binding */ 
/* Importing the goal class to use to receive the goal description to display from the parent component goal component */ 
import { Goal } from '../goal';



@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  //We define goal as the property that will undergo input property binding, which is of the type Goal, from the blueprint class.
  @Input() goal: Goal;

  //We have then used the Output decorator to define isComplete as an EventEmitter that takes in a boolean.
  @Output() isComplete = new EventEmitter<boolean>();

  //After that, we have created our goalComplete() function which calls the emit method on the isComplete EventEmitter.
  //What this does is pass this event to the parent component.
  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  constructor() { }

  ngOnInit() {
  }

}

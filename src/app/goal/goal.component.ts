import { Component, OnInit } from '@angular/core';
/* Importing the goal class to use as a blueprint for creating new goals */ 
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {


  /* Let us create several goals using the goal blueprint class. */ 
  goalss: Goal[] = [
    new Goal(1, 'Watch Finding Nemo 3', 'Find an online version and watch Merlin find his son.', new Date(2020,3,14)),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot.', new Date(2019,6,9)),
    new Goal(3, 'Get a new phone case', 'Diana has her birthday coming up soon.', new Date(2022,1,12)),
    new Goal(4, 'Get dog food', 'Pupper likes expensive snacks.', new Date(2019,0,18)),
    new Goal(5, 'Solve math homework', 'Damn Math.', new Date(2019,2,14)),
    new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overlord.', new Date(2030,3,14)),
  ];


  // Let's now create the toggleDetails() function that will display and hide a goal description. 
  toggleDetails(index){
    this.goalss[index].showDescription = !this.goalss[index].showDescription
  }


  // let's create this completeGoal() function which will be triggered when our event is captured.
  // Inside the function, we have passed in the isComplete event emitter and index as our arguments then used the splice javascript function to delete the goal at the index.
  // Keep in mind,  isComplete in this case, will return the value true that we set in the HTML template file of the GoalDetailComponent
  // and index will be the exact index of a goal from the loop in the GoalComponent HTML template file.
  deleteGoal(isComplete, index){

    if(isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goalss[index].name}?`)
      
      if(toDelete){
        this.goalss.splice(index, 1)
      }
    }
  }


  // We have created the addNewGoal() function that takes a goal object as an argument.
  // We first need to change the id property of the goal.
  // We get the length of the array of goals and store it in the variable goalLength we then add one to the goalLength and set that as the new id for the goal.
  // We then set the completeDate property of the goal object to a Date Object. 
  // Lastly, we push the new goal to our array of goals.
  addNewGoal(goal){
    let goalLength = this.goalss.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goalss.push(goal)
  }
  

  constructor() { }

  ngOnInit() {
  }

}

// We have imported the ElementRef at the top
// which we have used in the constructor of the directive's definition class.
// We use ElementRef to inject a reference to the host DOM element in which we will use this directive.
// we have imported HostListener and used it to define the events that will be initiated by user actions
// the first one being a click that creates a line-through 
// and the second one being a double click which changes the text-decoration to none thus removing the line-through.
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) { 

  }


  // Let's now create these actions that will feed into our textDeco() function.
  // We can see that for each action, we call our textDeco() function, this.textDeco() and pass in the name of the action as a string. 
  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }


  // We'll put the user in control of making the strikethrough work on the app.
  // When the user clicks a goal, it is marked as complete with the strikethrough
  // and when the user double-clicks on the goal, it is marked an incomplete by removing the strikethrough from the goal.
  // Let's implement this in our directive.
  private textDeco(action: string){
    // We have then targeted the host element's style attribute and changed the text-decoration to line-through.
    // The ElementRef grants us direct access to the host DOM element through its nativeElement property.
    // We have changed our directive's logic by creating a function textDeco() which takes in an action and then performs a text-decoration using the action.
    this.elem.nativeElement.style.textDecoration=action;
  }

}

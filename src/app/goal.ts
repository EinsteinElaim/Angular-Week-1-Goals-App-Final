export class Goal {
    public showDescription: boolean;
    //PIPE -- In Angular, a pipe takes in data as input and transforms it into the desired output. Imagine having a date that reads like this:
    //  we will use an inbuilt Angular pipe to simplify our dates.
    // To do this, we'll add a completion date to our goal blueprint class so that each goal can have a completeDate property.
    constructor(public id: number, public name: string, public description: string, public completeDate: Date){
        this.showDescription=false;
    }
    
}

class TuringMachine {


    constructor(){
        this.states = [];
        this.transitions = {};
        this.currentState = null;
        this.startState = null;
        this.acceptState = null;
        this.rejectState = null;
        this.tape = [];
        this.head = 0;
        this.steps = 0;
        this.info={
            language:"",
            description:"",
            author:""

};

    }

    /*
        Προσθήκη κατάστασης
    */

    addState(name){


        if(!this.states.includes(name)){
            this.states.push(name);
        }


    }

    /*
        Ορισμός αρχικής κατάστασης
    */
   setStartState(state){
    this.startState = state;
   }

    setAcceptState(state){
     this.acceptState = state;
    }

    setRejectState(state){
        this.rejectState = state;
    }




    /*
        Προσθήκη μετάβασης
        Παράδειγμα:
        q0 + a
        γράψε X
        πήγαινε R
        q1

    */

    addTransition(
        from,
        read,
        write,
        move,
        to
    ){


        if(!this.transitions[from]){
            this.transitions[from] = {};
        }


        this.transitions[from][read] = {
            write:write,
            move:move,
            next:to


        };


    }

    /*
        Φόρτωση εισόδου στην ταινία
    */
    loadInput(word){
        this.tape = word.split("");
        this.head = 0;
        this.steps = 0;
        this.currentState =
        this.startState;


    }

    /*
        Ένα βήμα εκτέλεσης

    */


    step(){
        let symbol =
        this.tape[this.head] || "□";
        let rule =
        this.transitions
        [this.currentState]
        ?. [symbol];



        if(!rule){
            return {
                finished:true,

                accepted:
                this.currentState
                === this.acceptState

            };


        }

        /*
            γράψε
        */

        this.tape[this.head]
        = rule.write;


        /*
            κίνηση κεφαλής
        */


        if(rule.move==="R"){
            this.head++;
        }


        else if(rule.move==="L"){
            this.head--;
        }

        /*
            νέα κατάσταση
        */
        this.currentState =
        rule.next;
        this.steps++;

        return {
            finished:false,
            state:this.currentState,
            tape:this.tape,
            head:this.head,
            steps:this.steps


        };

    }

    /*
        Reset

    */

    reset(){


        this.currentState =
        this.startState;
        this.head=0;
        this.steps=0;


    }

    /*
        Export JSON

    */

toJSON(){

    return JSON.stringify({
        info:this.info,
        states:this.states,
        start:this.startState,
        accept:this.acceptState,
        reject:this.rejectState,
        transitions:this.transitions

    },null,4);

}


}

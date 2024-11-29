window.onload = function() {
    console.log("start")
    calculator.init();
    
}

let calculator = {
    buttons: undefined,
    input: undefined,

    init: function()
    {
       this.buttons = document.querySelectorAll(".numbers button, .operators button");
       this.input = document.getElementById("input");
       for(let i = 0 ; i<this.buttons.length; i++)
       {
         let el = this.buttons[i];
         el.addEventListener("click", this.buttonClick)
       }
    },

    buttonClick: function(e){
     let divHtmlText = e.target.innerHTML
     switch(divHtmlText){
       case "=": 
          calculator.evaluate();
       break;
       case "C":
          calculator.input.value = null;
        break;
        default:  
        calculator.addToInput(divHtmlText)
        break;

     }
   
    },

    addToInput: function(str)
    {
     this.input.value += str;
    },
    evaluate: function()
    {
       let result =  eval(calculator.input.value)
       calculator.input.value = result;
    }
    
}

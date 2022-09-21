//This Object is State of Counter
let counter = {
  state: 0,
  setState: function (value = 2) {
    this.state = value;
  },
  getstate: function () {
    return this.state;
  },
};
counterButton;


// job of This Fuction is select html Element and set its inner value
function setinnertext(elementId, innerText) {
  try{ const htmlElement = document.getElementById(elementId);
  htmlElement.innerText = innerText;
  return htmlElement;
}catch (err){
  console.log(err.message)
  console.log('there was an error While setting InnerText on setinnertext function')
  console.log(err)
}
  
}

setinnertext("counter", counter.getstate());



//job of this Function is set event Setter ,it take id of the html Elment, eventType and a callback function
function setEventListener(elementId, eventType, callback) {

try{const element = document.getElementById(elementId);

  element.addEventListener(eventType, callback);
  
 
}catch(err){
 console.log(err.message)
 console.log("Error Occur on EventListener Function")
  }
}

setEventListener("counterButton", "click", () => {
  counter.setState(counter.state + 1);
  setinnertext("counter", counter.getstate());
});


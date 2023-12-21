// Task01 - Create a simple function that will be used as event handler. 
// function should cancel event bubbling

function task01(event) {
      event.stopPropagation();
      console.log("Подія була зупинена!");
    }

const button = document.getElementById('myButton');
button.addEventListener('click', task01);
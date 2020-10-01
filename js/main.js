"use strict";
let num = 20;
function  showFirstMessage(text) {
      console.log(text);
      let num = 10;
    }

showFirstMessage('Привет тётя');
console.log(num);

function calc(a, b){
  return (a + b);
}

console.log(calc(4,4));

function res(){
  let num = 50;
  return num;
}

let anotherNum = res();
console.log(anotherNum);

const logger = function(){
    console.log('Hello');
};

logger();

let a = 3;
let b = 4;

const arrow = (a, b) => {
    return (console.log(a + b));
};
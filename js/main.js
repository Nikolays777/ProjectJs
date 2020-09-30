"use strict";
if(4 == 9){
  console.log('Ok');
} else{
  console.log('Error');
}

const num = 30;

// if(num < 49){
//   console.log('Error');
// }else if(num === 50){
//   console.log('Ok');
// }else{
//   console.log('Error');
// }

// (num === 50) ? console.log('Ok') : console.log(false);

switch (num) {
  case 50:
    console.log('true');
    break;
  case 30:
    console.log('fff');
    break;
  case 49:
    console.log('yop');
    break;

  default:
    console.log('Loky');
    break;
}
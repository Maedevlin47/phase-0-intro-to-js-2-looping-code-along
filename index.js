//for (let age = 30; age < 40; age++){
    //console.log('I'm ${age} years old. Happy brithday to me!');
    //debugger;
//}

//for (let age = 30; age < 40; age++) {
    //console.log(`I'm ${age} years old. Happy birthday to me!`);

 // }

 //const gifts = ["teddy bear", "drone", "doll"];

 //function wrapGifts(gifts){
   // for (let i = 0; i < gifts.length; i++){
   //     console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //  }
    //  return gifts;
   // }
// wrapGifts(gifts);

 
const i = "element";

function writeCards(arr, word) {
  //let newArr = [(`Thank you, ${arr[0]}, for the surprise ${word} gift!`)];
  let newArr = [i];
  for (let i = 0; i<arr.length; i++);{
    newArr.push(`Thank you, ${arr[i]}, for the surprise ${word} gift!`);
    console.log(`Thank you, ${arr[i]}, for the surprise ${word} gift!`);
  }
  return newArr + writeCards;
}
writeCards(["Guadalupe", "Ollie", "Aki"],"birthday");
 
//writeCards(["Guadalupe"], "birthday");
//writeCards(["Ollie"], "birthday");
//writeCards(["Aki"], "birthday");

 function countDown(num) {
  while(num > -1) {
    console.log(num)
    num--
  }
}
console.log("train task ishga tushdi");
console.log("Jack ma maslaahatlari")
const list = [
    "yahwi talaba boling", // 0-20
    "togri boshliq tanlang va koproq xato qling", // 20-30
    "uzingizga ishlashni boshlang",//30-40
    "siz kuchli bolgan narsalarni qiling", //40-50
    "yoshlarga investitiya qiling", //50-60
    "endi dam oling, fooydasi yoq endu", //60
]
// function maslahatBering(a, callback) {
//     if(typeof a !== "number") callback("insert a number", null);
//     else if(a <= 20) callback( null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
// else {
//     setTimeout(function() {
//         callback(null, list[5])
//     }, 5000);
//    }
// }
//CALLBACK function 
 async function maslahatBering(a, callback)  { 
    if (typeof a !== "number") throw new Error ("Insert a number" );
    else if(a <= 20) return list [0];
    else if (a > 20 && a <= 30)  return list [1];
    else if (a > 30 && a <= 40)  return list [2];
    else if (a > 40 && a <= 50)  return list [3];
    else if (a > 50 && a <= 60)  return list [4];
else { setInterval(function () {
            callback(null, list[5]);
      }, 5000);
         //return new Promise ((resolve, reject) => {
        // setInterval(() =>{ //Timeout va Interval
        //     resolve(list[1]);
        // }, 5000);
    // 
    // setTimeout(function() {
    //     return list [5];
    // }, 1000);
}
}
 // ASYNC function
// console.log("passed here 0");     THEN AND CATCH
//.          call via THEN AND CATCH

// maslahatBering(20)
// .then((data) => {  // buni ichida yana bitta shunday kirgizsak boladi
// console.log('javob:', data);
// })
// .catch((err) => {
// console.log("ERROR:", err);
// });
// console.log("passed here 1");
 
  // call via ASYN AWAIT
  
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//      javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(30);
//     console.log(javob);
//     javob = await maslahatBering(40);
//     console.log(javob);
    
// }
// run();
     console.log("passed here 0");
     maslahatBering(70, (err, data) => {
        if (err) console.log("ERROR:", err);
        else {
            console.log(data);
        }
     });
     console.log("passed here 1")


     //TASK

    //  function countLetter(word, letter) {
    //     return word.split("").filter(s  =>  s === letter).length;
    //   }
      
    //   console.log(countLetter("scissor", "s")); 
    function countLetter(word, letter) {
        return word.split("").filter(s  =>  s === letter).length;
      }
      
      console.log(countLetter("scissor", "s")); 
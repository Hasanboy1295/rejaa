// TASK D




function barchasi(a, b) {
  let sortedA = a.split(``).sort().join();
  let sortedB = b.split(``).sort().join();
  if (sortedA === sortedB)  {
    return true;
} else {
    return false;
  }

}


let natija = barchasi("mitgrop", "itgropm");
console.log (natija);


// Ikkita parametra ega function tuzing, va functioning
// berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
// mos kelsa true qiymat qaytarsin

// Masalan: checkContent("mitgroup", "gmtiprou");
// Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
// ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi






// TASK-C

// class dokon {
//   constructor (non, lagmon, cola) {
//     this.non = non
//     this.lagmon = lagmon 
//     this.cola =cola 
//   }
//   qoldiq()  { 
//     const time = new Date();
//     const soat = time.getHours();
//     const minute = time.getMinutes();

//     console.log(`hozir ${soat}:${minute}   ${this.non} ta non,   ${this.lagmon} ta lag'mon, ${this.cola}  ta cola mavjud`)
//   };
//  sotish(mahsulot, son) {
//   this[mahsulot] = this[mahsulot] - son 
  
//  }
//    qabul( mahsulot, miqdori) {
//     this[mahsulot] = this[mahsulot] + miqdori
//    }
// }

// const shop = new dokon(4, 5, 7);
// shop.qoldiq();
// shop.sotish("non", 1 )
// shop.qoldiq();
// shop.sotish("lagmon", 2 )
// shop.qoldiq();
// shop.qabul("cola", 3)
// shop.qoldiq();
// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!



// TASK B

//const { text } = require("express");

// Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin



  // function countDigits(dev) {
  //   let div = dev.split("");
  //   let digits = dev.filter(function(ele) {
  //       return  ele >= "0" && ele <= "9";
  //   });
  //   return digits(countDigits("ad2a54y79wet0sfgb9"));
  // }
  // console.log
  // 4. Funksiyan
// Masalan: countDigits("ad2a54y79wet0sfgb9")
// Yuqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi

//let str = "ad2a54y79wet0sfgb9";
//let number = str.split('').filter(char => !isNaN(char) && char !== ' ').join('');
//console.log(number);



// console.log("train task ishga tushdi");
// console.log("Jack ma maslaahatlari")
// const list = [
//     "yahwi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq xato qling", // 20-30
//     "uzingizga ishlashni boshlang",//30-40
//     "siz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga investitiya qiling", //50-60
//     "endi dam oling, fooydasi yoq endu", //60]
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
//  async function maslahatBering(a, callback)  { 
//     if (typeof a !== "number") throw new Error ("Insert a number" );
//     else if(a <= 20) return list [0];
//     else if (a > 20 && a <= 30)  return list [1];
//     else if (a > 30 && a <= 40)  return list [2];
//     else if (a > 40 && a <= 50)  return list [3];
//     else if (a > 50 && a <= 60)  return list [4];
// else { setInterval(function () {
//             callback(null, list[5]);
//       }, 5000);
         //return new Promise ((resolve, reject) => {
        // setInterval(() =>{ //Timeout va Interval
        //     resolve(list[1]);
        // }, 5000);
    // 
    // setTimeout(function() {
    //     return list [5];
    // }, 1000);
// }
// }
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
    //  console.log("passed here 0");
    //  maslahatBering(70, (err, data) => {
    //     if (err) console.log("ERROR:", err);
    //     else {
    //         console.log(data);
    //     }
    //  });
    //  console.log("passed here 1")
    //  maslahatBering(40, (err, data) => {
    //     if (err) console.log("ERROR:", err);
    //     else {
    //         console.log(data);
    //     }
    //  });
    //  console.log("passed here 1")


     //TASK

      
    // function countLetter(word, letter) {
    //     return word.split("").filter(s  =>  s === letter).length;
    //   }
      
    //   console.log(countLetter("scissor", "s")); 
      


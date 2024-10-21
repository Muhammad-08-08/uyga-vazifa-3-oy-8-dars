// 1-misol

// let soz = prompt("Biror bir so'z kiriting");
// let arr = "";

// for (let i = soz.length - 1; i >= 0; i--) {
//     arr += soz[i];
// }
// alert(arr);

// 1-misol tugadi

// 2-misol

// let soz = prompt("biror bir son kiriting");
// let arr = [];

// for (let i = 0; i < soz.length; i++) {
//     arr.push(soz[i]);
// }
// alert(arr.reverse().join(""));

// 2-misol tugadi

// 3-misol

// let son = prompt("biror bir son kiriting");
// let arr = [];

// for (let i = 0; i < son.length; i++) {
//   arr.push(son[i]);
// }
// if(arr % 2 === 0){
//     alert(`"${son} ":juft son`);
// }else{
//     alert(`${arr.filter((item, index) => index % 2 === 1)} toq son`);
// }

// 3-misol tugadi

// 4-misol

// let son = prompt("biror bir son kiriting");
// let arr = [];

// if (son % 2 !== 0) {
//     alert(`${son} tub son`);
// }else if( son % 2 === 0){
//     alert(`${son} murakkab son`);
// }

// 4-misol tugadi

// 5-misol

// let n = parseInt(prompt("Mukammal sonni aniqlash uchun musbat butun son kiriting:"));

// let yigindi = 0;

// for (let i = 1; i < n; i++) {
//     if (n % i === 0) {
//         yigindi += i;
//     }
// }

// if (yigindi === n) {
//     alert(n + " mukammal son.");
// } else {
//     alert(n + " mukammal son emas.");
// }

// 5-misol tugadi

// 6-misol

// let son = prompt("biror bir son kiriting");
// let yigindi = 0;
// for (let i = 0; i < son.length; i++) {
//     yigindi += parseInt(son[i]);
// }
// alert(yigindi);

// 6-misol tugadi

// 7-misol

// let son = "50, 40, 23, 70, 56, 12, 5, 10, 7";
// console.log(Math.max(...son.split(", ")));

// 7-misol tugadi

// 8-misol

let soz = prompt("Biror bir so'z kiriting");

let soz1 = "";
for (let i = soz.length - 1; i >= 0; i--) {
    soz1 += soz[i];
}

if (soz === soz1) {
    alert(`true`);
} else {
    alert(`false`);
}
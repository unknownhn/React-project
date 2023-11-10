/////////////Task1
// function task1(obj,a,b){
//     obj[a]=b
//     return obj
// }
// console.log(task1({},"Burust",300))

//////////////////Task2
// function task2(v){
// //     let res=0
// //    let v=a.map((e) => {
// //     return res+e.score
// //    })
//   return v.reduce((a,b) => {
//     return a+b.score
//   }, 0)
// }
// console.log(task2([{title:"N",score:2},{title:"A",score:2},{title:"T",score:2}]));

////////////////////home work task1
// function task(a){
// let obj=[]
//   let res=a.filter((v, i) => v!=i)
//   return res
// }
// console.log(task([1,2,2,3,3,3]));

/////////task2
// function task(a){
//   let cnt=''
//   let arr=[]
//   a.filter((e) => {
//    if(!cnt.includes(e.id)){
//     cnt+=e.id
//     arr.push(e)
//    }
//   })
//   return arr
// }
// console.log(task([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' },{ id: 1, name: 'J im' }]));

// function task(a,b){
//    return a.reduce((obj,e,i) =>{
//     // console.log(e)
//     // console.log(obj)
//    obj[e]=b[i]
//    return obj
  
//    } ,{})
// }
// console.log(task(['name', 'age'], ['John', 25]))

/////////////////////task
// function task(a){
//   let word=a.split(" ").map((e) => e.toLowerCase())
//    return word.reduce((obj,e) =>{
//     obj[e]=(obj[e] || 0) +1
//     return obj
//    } ,{})
// }
// console.log(task("This is one test This is only test"))

/////////////////task 5
// function task(a,b){

// }
// console.log(task({ a: 1, b: 'hello', c: "bye", d: 5 }, 'string'));

// function dashed(a) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
//     let res = ''
//     for (let char of a) {
//       if (vowels.includes(char.toLowerCase())){
//         res += '-' + char + '-'
//       }else {
//         res += char
//       }
//     }
//     return res;
//   }
//   console.log(dashed("Edabit")); 
//   console.log(dashed("Nihao")); 
//   console.log(dashed("Nnnn")); 

// function mapping(letters) {
//     const obj = {};
  
//     for (let letter of letters) {
//       const lowercase = letter.toLowerCase();
//       const uppercase = letter.toUpperCase();
//       obj[lowercase] = uppercase;
//     }
  
//     return obj;
//   }

// function afterNYears(p, n) {
//     const res = {}
//     for (let person in p) {
//         // console.log(p[person])
//       let nowage = p[person]
//       let age = nowage + Math.abs(n);
//       res[person] = age;
//     }
//     return res;
//   }
//   console.log(afterNYears({ "Joel" : 32, "Fred" : 44, "Reginald" : 65, "Susan" : 33, 
//   "Julian" : 13}, 1));

// function get(obj) {
//     let res=[]
//    for (let person in obj) {
//     res[person]=Object.values(obj)
//     let obj2=person.values()
//    res[obj2] = obj1;
//    }
//    return res
// }
// console.log(get({ "zebra": "koala", "horse": "camel" }));







//////////////////////////////////////////////////EDABIT tasks
// function sum(a,b){
//   return a+b
// }
// console.log(sum(3,2));
// console.log(sum(-3,-2));

// function sum(a){
//   return a*60
// }
// console.log(sum(3));
// console.log(sum(5));

// function sum(a){
//   return a+1
// }
// console.log(sum(0));
// console.log(sum(-3));

// function sum(a,b){
//   return (a*b)/2
// }
// console.log(sum(3,2));
// console.log(sum(10,10));

// function sum(a){
//   return a.at(0)
// }
// console.log(sum([1,30,2]));
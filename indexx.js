// console.log('5'+3);
// console.log('5'-3);
// console.log('5'*3);
// console.log(typeof NaN);
// console.log(NaN===NaN);
// console.log(1<2<3);
// console.log(3>2>1);



// for in and for of loop

// let srt="sunita";
// for(let i of srt){
//     console.log("i",i);
// }

// for(let i in srt){
//     console.log(i);
// }

// // array 
 
// let arr=[2,34,3,45];
// for(i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }


// function 

function sum(a,b){
    return a+b;
}
let z=sum(1,2)
console.log(z);

// arrow function 

 let arrow=(a)=>{
      return a*2;
 }
 console.log(arrow(2));

 // map function 

 let arr=[2,4,1,5,7];

 let newarr=arr.map((value)=>{
   return value*2;
 })
 console.log(newarr);

 //filter function 

 let newaar=arr.filter((value)=>{
    return value%2==0;
 })
 console.log(newaar);

 // reduce function 

//  let redu=arr.reduceL(ress,crr){
//     return ress+crr;
//  }
//  console.log(redu);

// obj 

// let persion={
//     name:"sunita",
//     lastname:"mandloi",
//     age:22,
//    printname: function(){
//    console.log("i am "+this.name,this.lastname );
//     }
//     }

//     persion.printname();

// prototype

// let tex={
//      caltex(){
//         console.log(" 10 % discount",10);
//      }
// }


// callback

function sum(a,b){
    console.log(a+b);
}
function cal(a,b,sumcall){
    sumcall(a,b);
}
cal(2,3,(a,b)=>{
    console.log(a+b);
})
/*
Write a javascript function to reverse a number
*/

// let str=toString(this.nums);
let result=0;
let nums=123;

for(let i=0; i<1;i++{
    let remainder=nums%10;
     result=result*10 +remainder;
     nums=nums/10;
}

console.log(result);
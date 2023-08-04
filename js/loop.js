//1. N number in reverse order
console.log("reverse order:")
for(let i=10;i>=0;i--)
{
	console.log(i);
}


//2. N odd numbers
console.log("odd number:")
for(let i=0;i<=10;i++){
 if(i%2!=0)
 {
 console.log(i);
 }
}

//3.sum of a number

let sum=5;
let temp=0;
console.log("sum of two number:")
for( let i=1;i<=sum;i++)
{
temp=temp+i;
}
console.log(temp)

//4. Table of a given number

let num=parseInt(prompt("enter a table number:"));
console.log("given number of table:")
for(i=1;i<=10;i++){
	temp=i*num;
	console.log(i +"*"+num +"="+temp);
}

//5. prime or not

let d = parseInt(prompt("Enter a number: "));
let flag = true;

for (let i = 2; i < d; i++) {
  if (d % i == 0) {
    flag = false;
    break;
  }
}

if (flag) {
  console.log("Prime number");
} else {
  console.log("Not a prime number");
}
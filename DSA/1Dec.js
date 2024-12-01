//@ reverse string 
let string = "pradhumn";
console.log(string.split('').reverse().join(''));
//or
for(let i = string.length-1; i>=0 ;i--)
{
    console.log(string[i])
}


// @ cheach for palendrom
let string = "heleh";
let k =(string)=>
{   let revString  = [];
    for(let i = string.length-1; i>=0 ; i--)
    {     
         revString .push(string[i]);
    }
   return string === revString.join('') ? "is palindrome" : "is not palindrome" ;
}
console.log(k(string));


// # let arr = []; you must explicitly initialize it as an empty array ([]) before using array-specific methods like push().

//@ FizzBuzz(if value will properly divisable by 3 then give "fiss", if by 5 then give "3",if divisible by 3 & 5 give "fissBiss")
let fizzbiss = ()=>{
            
    let newarr = [];

    for(let i = 1 ; i<=100 ;i++)
    {
      if(i % 3  === 0 && i % 5 === 0){ newarr.push("fissBiss") }
      else if(i % 3  === 0){  newarr.push("fiss") }
      else if(i % 5  === 0){ newarr.push("Biss")}
      else newarr.push(i)
    }
    return newarr
}
console.log(fizzbiss());





// @ flaten the  nested array 
function flattenArray(arr) {
    return arr.flat(Infinity); // hear we mantion "Infinity" becouse we don't know how much nested the array is.
  }
console.log(flattenArray([1, [2, [3, [4, 5]]]])); // Output: [1, 2, 3, 4, 5]
  


// @  Find Missing Number in an Array

let map = new Map();
let a = (arr)=>{
      let notPresent = [];
        for(let i = arr[0] ; i <= Math.max(...arr); i++)
         { 
           if(!arr.includes(i))   notPresent.push(i)
         }
          return notPresent;
}
console.log(a([1,2,4,5,7]));

// #  Array.from(object) create a new array from an array-like or iterable object






// @ Anagram Check (mean one word all cherater presnet in another word like "hello" and "lhloe")
let s1 = "hello";
let s2 = "lloeh";

let charMap = new Map();


let result = ()=>{
    
for(let i = 0 ; i< s1.length ;i++)
{
     charMap.set(s1[i], ( charMap.get(s1[i]) || 0 ) + 1); // set(key,value)
     // get will return given-key value so if value is not there 
     // "(null || 0) + 1"   or  "(1 || 0) + 1"
}
//console.log(charMap);
for(let i = 0 ;i<s2.length;i++)
{
      // cheack if interation of s2 presnet in charMap is yes then map.set(key, value-1)
      if(!charMap.has(s2[i])) return false; // key is not present it not Anagram ,if presnet continue
        charMap.set(s2[i],charMap.get(s2[i])-1)
       if(charMap.get(s2[i]) === 0) charMap.delete(s2[i]);
      
      // if any key of charMap is 0 we have to delete it  
      // we put last becuee after upper code sub then only we will delete correct 
}
   let k = charMap.size===0? true : false ;
   return k 
}
console.log(result()?"is Anagram" : "is not Anagram");



















// diff between slice and splice in js string.





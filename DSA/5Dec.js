//@ find largest num of array .
//arr.sort((a, b) => a - b); this is how sorting work in js is change to + it give assanding order.
let arr = [1,23,2,1,4,5,3,5];
arr.sort((a,b)=>a-b);
console.log(arr[arr.length-1])

//@ Find the missing number in an array of 1 to n.
let arr = [1,2,4,27,4,3];
let n = 10;
let newarr = [];
for(let i = 1;i<= n ;i++)
{
    if(!arr[i])
    {
        newarr.push(i);
    }
}
console.log(newarr);


// @ Check if a string is a palindrome. ex- aabbaa,toot .
let ss ="rrttrr";
let k =()=>{
if(ss== ss.split('').reverse().join('')){return "its palindrome"}else{return "its not palindrome"};
}
console.log(k())



// @ Reverse a string.
let sss = "pradhumn ki jay hoo";
console.log(sss.split('').reverse().join(''));



// @  Find the intersection of two arrays.
let arr11 =[1,2,3,4];
let arr22 =[5,12,4,11];
let set = new Set(arr11);
let newarrr = arr22.filter((ele)=>set.has(ele));
console.log(newarrr);



//// Remove duplicates from a sorted array.
let map = new Map();
let arr2 = [1,2,2,1,3,3,5];
let newarr = [];
for(let i = 0 ; i< arr2.length;i++)
{
    map.set(arr2[i],(map.get(arr2[i]) || 0) + 1);
    if(map.get(arr2[i])>1) newarr.push(arr2[i]);
}
console.log(map);
console.log(newarr);


//@Count the frequency of elements in an array. number of tymes number is repeating in array. 
//@ Check if a string has all unique characters.
// this both are same as upper only some changes we have to do 



//@ // Merge two sorted arrays.

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let arr3 = [...arr1,...arr2]
arr3.sort(a,b)=>a-b;
console.log(arr3);














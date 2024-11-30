
// 1. Primitive Data Structures
// These are not objects and are immutable:
// Number
// String
// Boolean
// Null
// Undefined
// Symbol (introduced in ES6)
// BigInt (introduced in ES11/ES2020)
// 2. Non-Primitive (Object-Based) Data Structures
// These are built-in object-like structures in JavaScript:

// a) Linear Structures
// Array - Ordered collection of elements.
// TypedArray - Specialized arrays for binary data (e.g., Int8Array, Uint8Array).
// b) Key-Value Structures
// Object - Key-value pairs with string/symbol keys.
// Map - Key-value pairs with keys of any type.
// WeakMap - Key-value pairs with object keys that are weakly referenced.
// c) Set Structures
// Set - Unique values of any type.
// WeakSet - Stores objects only, weakly referenced.
// d) Binary and Specialized Structures
// Buffer (Node.js) - Used for binary data in Node.js.
// DataView - Provides a low-level interface for binary data in ArrayBuffer.
// ArrayBuffer - Represents a generic, fixed-length binary data buffer.


// ##### If there is not dataStructure which is given about then there is two ways to use them 
// (1)use external libery like {Lodash, Immutable.js, or collections.js} 
// (2)create custome by use of existing data strucure like array and all others 

//##### let map = new Map(); and arr.map(() => {}) are different.
// Map built-in Js object used to store key-value pairs.
// map used to iterate over an array and transform its elements, returning a new array.

//it set where key is 'age' it insert its value as 30
// map.set('name', 'John');
// map.set('age', 30);
// // Using get() to retrieve values
// console.log(map.get('name')); // 'John'
// // Using has() to check if a key exists
// console.log(map.has('age')); // true
// // Using delete() to remove a key-value pair
// map.delete('age');
// // Using size to get the number of items
// console.log(map.size); // 1
// // Using keys(), values(), and entries() to get iterators
// console.log([...map.keys()]);   // ['name']
// console.log([...map.values()]); // ['John']
// console.log([...map.entries()]); // [['name', 'John']]



// ### what is use of Array.from():- Converting an array-like object to an array




//@How do you flatten a nested array in JavaScript?
let arr = [[1,2],[3,4],[15,1,2]];
let newarr = []
for(let ele of arr)
{
for(let ele1 of ele)
{
    newarr.push(ele1)
}
}
console.log(newarr)
// by single loop
for(let ele of arr)
{
 newarr.push(...ele);  // spread operater open all element of array
}
console.log(newarr)


//@How do you sort an array in JavaScript?
let arr = ["hello", "hi", "hii", "hi", "hello"];
let map = new Map();

for (let ele of arr) {
    // if presnet it give !true = false mena it want run else block and allow for next iteration. 
    // if not preset it give !false = true mean it run  insert value into map
  if (!map.has(ele)) {
    map.set(ele, true); 
  } 
}
console.log(Array.from(map.keys())); 
//or
console.log([...map.keys()]); 



// @What is the difference between .filter() and .find()?
let arr = [5,30, 12, 8, 20, 3];
let fineValue = arr.find((ele) => ele > 10);
console.log(fineValue); // 30
let filterValue = arr.filter((ele) => ele > 10);
console.log(filterValue); // [30,12,20]
// diff find return first value based on condition which setisfy condition like :- 30
//      filter retunr all values which setisy condaiton in form of array   like :-[30,12,20]


// @ How do you remove an element from an array in JavaScript?
let arr = [10,20,30,40,50,10,10];
let targat =10;
console.log(arr.filter((ele)=> ele !== targat)??arr.filter((ele)=>(ele !== targat))); 
console.log(arr.filter((ele)=> ele !== targat)||arr.filter((ele)=>(ele !== targat)));


// Diff in || and ?? 
// || : If the first value is falsy (null, undefined, 0, false, "", etc.), it picks the second value.
// ?? (Nullish Coalescing): It prints the first value, even if it’s falsy (false, 0, ""), but if the first value is null or undefined, it picks the second value.


// @What is the difference between .map() and .forEach()?

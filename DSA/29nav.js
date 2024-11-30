which is best approch problem solve with inbuild-method or without custome ??
ans:-first try to sovle with inbuild-method and then custome logic.

# find unique value in array
let arr = [1, 2, 2, 3, 4, 4, 5]
//let uniqueArr =[];  //--
// first we interate through thr loop
let uniqueArr =[]; 
let a = ()=>{ 
             for(let i = 0 ;i<= arr.length;i++){
             // cheak in uniqueArr is value is exist or not , if not push the vlaue and return after loop over
              if(!uniqueArr.includes(arr[i]))
              {
                uniqueArr.push(arr[i])
              }
              }
            return uniqueArr;
}
console.log(a());
## same but with string
let arrString = ["hi","hello","hi","why"];
let uniqueArr =[];
let returnVlaue=()=>{
                    for(let i =0 ;i<arrString.length ;i++) 
                       { 
                         if(!uniqueArr.includes(arrString[i]))
                         {
                             uniqueArr.push(arrString[i])
                         }
                        
                       }
                    return uniqueArr;
                  }
console.log(returnVlaue());






#########_______JS Methods_____##########

##diff in map and foreach
forEach: Use it when you want to do something with each item in the array (like print it to the console) but don’t need to create a new array becouse it will not return any thing. 
Use forEach for simpler iterations where you don’t need to stop the loop or work with indices.
Use for when you need more control, like breaking the loop early or iterating in a custom way.


map: Use it when you want to change/transform each item in the array and create a new array with those changes. 

const numbers = [1, 2, 3, 4];
const doubled = [];

numbers.forEach((num) => doubled.push(num * 2));
console.log(doubled); // [2, 4, 6, 8]

const doubledWithMap = numbers.map((num) => num * 2);
console.log(doubledWithMap); // [2, 4, 6, 8]






## diff in filter and find :- filter will take effect on all values which setisfy condition and find effect on first value which setisfy the condition.




## reduce in depth



## diff in for-in and for-of 
*for-in: Use to iterate over keys of objects and indices of arrays.  
  It doesn't directly access values but gives you the keys that you can use to retrieve values
*for-of: Use to iterate over values of arrays, strings, Maps, Sets and other iterable objects. 
 Cannot be used directly on plain objects unless they are explicitly made iterable. 
Conclusion: Use for-in to work with keys/indices, and use for-of to work with values.





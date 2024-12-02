

//@ Merge Intervals

let arr = [[1,2],[2,5],[6,8],[9,10]];
// sort the array based in nested array left value.
arr.sort((a,b)=> a[0] - b[0]);
// create newEmptyArray , correntIndex 
let newEmptyArray = [];
let correntIndex = arr[0]; //we start & from hear we push to newArray.

// start the loop from 1 to srr.length becouse 0 already assine in correntIndex
for(let i = 1 ; i< arr.length ;i++)
{   //NextIndex which change in each intation 
    let  NextIndex = arr[i];
    // cheack i[x,y] $ i+1[x,y] 
    // if i[y]>=i+1[x] then i[y]=Max(i[y],i+1[y]);
    // else push correntIndex in newarray becouse it only hold min and max value & put NextIndex value into correntIndex.
    if(correntIndex[1] >= NextIndex[0])
    {
        correntIndex[1] = Math.max(NextIndex[1],correntIndex[1]);
    }else{
        newEmptyArray.push(correntIndex);
        correntIndex = NextIndex;
    }
}
  newEmptyArray.push(correntIndex);
  console.log(newEmptyArray);// [[1,5],[6,8],[9,10]]





  // @Find All Duplicate Elements in an Array

  let arr = [1,2,3,1,2,4,0];
  let map = new Map();
  let newArr = [];
  for(let count of arr)
  {
     if(!map.has(count))
     {map.set(count,1)}
     else map.set(count,map.get(count)+1);
     if(map.get(count)>1) newArr.push(count);
  }
  console.log(newArr);
  
  



// @ Rotate an Array

let arr = [1, 2, 3, 4, 5];
let rotate = 2;
let rotateArray = new Array(arr.length).fill(0); //we have to assine length so for any index time of loop we can push assine the vlaue 

for (let i = 0; i < arr.length; i++) {
  // Calculate the new index
  if (i + rotate < arr.length) {
    // Directly place the value if the index does not exceed array length
    rotateArray[i + rotate] = arr[i];
  } else {
    // Wrap around when index exceeds the array length
    let newIndex = (i + rotate) - arr.length;
    rotateArray[newIndex] = arr[i];
  }
}
console.log(rotateArray); // Output: [4, 5, 1, 2, 3]







// @Valid Parentheses
//  Write a function to check if the given string has valid parentheses. For example, {[()]} is valid, but ([)] is not 
function isValidParentheses(str)
{
    if(str.length%2===1){return "not Valid Parentheses"}
    else{
        for(let i =0; i<str.length ;i++)
        {
             console.log(str[i], str[str.length-1-i]);
            // console.log(i, str.length-i-1);
             
           if(str[i] === str[str.length-1-i]) continue;
         // else break;
        }
        return "not Valid Parentheses";
          
    }
}
console.log(isValidParentheses("{[()]}")); // Output: true
//console.log(isValidParentheses("{()}/"));   // Output: false






// @Group Anagrams
function groupAnagrams(strings) {
    let map = new Map(); // Map to store sorted strings as keys and anagrams as values.

    for (let str of strings) {
        // Sort the string to create a unique key for anagrams
      //  console.log(str);
        let sortedStr = str.split('').sort().join('');
        console.log(sortedStr,str);
        // If the key doesn't exist in the map, initialize it with an empty array
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
      
        // Add the current string to the corresponding anagram group
        map.get(sortedStr).push(str);
          console.log(map);
    }

    // Return the grouped anagrams as an array of arrays
    return Array.from(map.values());
}

// Example usage
let input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
// Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]




// @ Find the Intersection of Two Arrays(values come under both array).


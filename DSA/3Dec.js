//@Rotate Matrix

function rotateMatrix(matrix) {
    const n = matrix.length;
    
    for (let i = 0; i < n / 2; i++) {
      for (let j = i; j < n - i - 1; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[n - j - 1][i];
        matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
        matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
        matrix[j][n - i - 1] = temp;
      }
    } 
    return matrix;
  }
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(rotateMatrix(matrix)); 


// @ sum if two num eqal to targat. 

let arr44 = [2,7,11,15,4,5];
let target = 9;
let map = new Map();
let newarr = [];
for(let i = 0 ; i< arr44.length;i++)
{
    let t = target-arr44[i];
  //  console.log(t);
    if(map.has(t))
    {
        newarr.push([arr44[i],t]);
    }else{
        map.set(arr44[i],t);
    }
}
console.log(...newarr);



// @Maximum Subarray (Kadane’s Algorithm)
let ar = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let corrent = 0;
let maxSum = -Infinity; // Initialize to -Infinity to handle arrays with negative numbers
let ff = [];
let temp = []; // Temporary array to track the current subarray

for (let i = 0; i < ar.length; i++) {
    
    corrent += ar[i];
    
    temp.push(ar[i]); // Add the current element to the temporary subarray
    
    if (corrent > maxSum) {
        maxSum = corrent; // Update maxSum
        ff = [...temp]; // Update ff with the current subarray
    }
    if (corrent < 0) {
        corrent = 0; // Reset the current sum
        temp = []; // Reset the temporary subarray
    }
}
console.log("Maximum Sum:", maxSum); // Output: 6
console.log("Subarray with Maximum Sum:", ff); // Output: [4, -1, 2, 1]





// @ Longest Increasing Subsequence    /// ?????

let aa =  [10, 9, 2, 5, 3, 7, 101, 18];
let newarrr = [];
let corr = 0;
let next = 0;
for(let i = 0 ;i<aa.length;i++)
{
     corr = aa[i];
     next = aa[i+1];
     console.log("(",aa[i],aa[i+1],")",i)
    if(aa[i]<aa[i+1])
    {
        newarrr.push(aa[i]);
    }
}
// [2,3,7,101]
console.log(newarrr);






// @ Majority Element 

let a = [3,2,3];
let map33 = new Map();
let totalAppearance = Math.floor(a.length / 2)+1;
let ans;

for(let i = 0 ;i < a.length;i++)
{
      if(!map33.has(a[i]))
    {
        map33.set(a[i],1);
    }else{ map33.set(a[i],map33.get(a[i])+1)}
    if(totalAppearance === map33.get(a[i]))ans = a[i]
}
console.log(ans);


























// @ Longest Palindromic Substring   /// ????


// @ Trapping Rain Water   /// ????


//  @ Minimum Path Sum    /// ????


//  @ Best Time to Buy and Sell Stock  /// ????

// @ Edit Distance (Levenshtein Distance)     /// ????


// @  Maximum Product Subarray    /// ????



// @  House Robber    /// ????



// @  Coin Change     /// ????



// Subarray Sum Equals K



//  Palindromic Substrings



//  Word Break



//  Longest Common Subsequence


/// Combination Sum


/// Jump Game



///  Find the Kth Largest Element in an Array



/// Sliding Window Maximum



/// Binary Search in Rotated Sorted Array



///  Serialize and Deserialize Binary Tree




//  Course Schedule














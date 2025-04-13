/* 

** Comparisons
we know many comparisons from maths
* in javascript they are written like this

1) > greater than 
2) < less than 
3) <= less than and equal
4) >= greater than and equal
5) == equals please note that double equality sign means the equality test while a single means an assginement
6) != not equals 
 Boolearn is the result 
// all comparisons operators return a boolean value 


 // String Comparison 
 too see whether a string is greater than another, javascript uses so-called "dictionary" or lexicographical
 order
  in other words string compares letter by letter 



*/

console.log("Z" > "A"); // true
console.log("Glow" > "Glee") // true
console.log("Bee" >  "Be")


/* 
the algorithm to compare two string is simple 

1) compares the first characters of both the strings 
2) if the first character of both the strings is greater or less than the other string's then the first string
is greater or less than the second we're done 
3) otherwese if the both string first characters are the same compared the second characters the same way
4) repeat until the end of either string 
5) if both strings end at the same length they are equal otherwise longer string is greater


** comparison of different type 
// when comparing values from different types javascript converts the values to numbers 

    

*/

console.log("3" > 1) // true
console.log("01" == 1)
console.log(true == 1)
console.log(false == 0)

// strnage output with null while comparising with 0

console.log(null == 0); // false 
console.log(null > 0); // false 
console.log(null >= 0) // true 


// An Incomparable undefined 

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined != 0)
console.log(undefined == null)
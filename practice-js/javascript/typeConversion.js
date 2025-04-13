 // String Conversion
 /*  string conversion happens when we need the string form of a value 
 const value = true;
  for example, alert(value) does not show the value 
  we can also call the alert(String(value)) function to convert a boolean into a string */
  
  console.log("6" / "2")
  let value = true;
  console.log(value) // this will not show the output in the alert cause it's not a string
  console.log(String(value)) // this will show the output to the alert cause we have used String function to convert boolean to a string
  
  
  // ** Numeric Conversion 
  /* Numeric conversion in mathematical conversion functions and expressions happens automatically
  for example when console.log("6" / "3") it will be 2;
  we can use the Number(value) function to explicitly convert a value to a number
  explicit conversion is usually required when we read a value from string based source 
  like a text form but expect a number to be entered 
   */
  
  const str = "tejas";
  console.log(typeof str === "string")
  
  
  console.log(Number("this is tejas pawar"))
  
  
  
  // * Boolean conversion 
  
  /* boolean converison is the simplest one 
  it happens in logical operators but also can be performed explicity with a call to Boolean(value);
  
  the conversion rule 
  1) values that are intuitively "empty", like 0, an empty string, null undefiend, and NaN become 
  false 
  2) other values become true
  */
 
  console.log(Boolean("empty"))
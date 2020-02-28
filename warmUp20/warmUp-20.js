// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .




function reverseStr(str) {
    var array =str.split(" ") ;
   var newArray=[];
        for (var i=array.length-1 ; i>=0 ; i--) {
           newArray.push(array[i])
        }
       
        return newArray.join(" ")
}

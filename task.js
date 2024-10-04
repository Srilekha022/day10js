//1. write a program to print the array in reverse order
// input:-- [1,2,3,4,5,{id:1,age:25},[1,2,3]]
// ouput:-- [[1,2,3],{id:1,age:25},5,4,3,2,1]
var arr = [1,2,3,4,5,{id:1,age:25},[1,2,3]]
var reverseArr = arr.reverse()
console.log(reverseArr);


//2. write a program to print the string in reverse order
//  input: "vamsi"
//  output: "ismav"
//  take one more string and reverse it
var str = "srilekha"
var reverseStr = ""
for(i=str.length-1;i>=0;i--){
    reverseStr = reverseStr + str[i]
}
console.log(reverseStr);



//3.write a program to print the age in the given array
// input:-- [1,2,3,4,5,{id:1,age:25},[1,2,3]]
// output:-- 25

var a= [1,2,3,4,5,{id:1,age:25},[1,2,3]]
for (elem of a) {
    if(typeof elem === "object"){
        console.log(elem.age);
        
    }
}


//Template Lateral
var a=10;
var b=20;
var c=a+b;
console.log("Output of template lateral");
console.log(`Value of A is "${a}"
 and B is "${b}"
 and sum is "${c}"`);

// Function Demo
function demo(){
    console.log("Hello World!");
}
console.log("Output of function");
demo();

// Const and Arrow Demo
const demo1=(a,b)=>a+b;
var c = demo1(20,30);
console.log("Output of Const and Arrow Demo");
console.log("Addition is "+c);

// Object Demo
var demo2={
    name: "Kunjan",
    Gender: "Male",
    Age: "20",
}

console.log("Output of Object Demo");
console.log(demo2);
console.log(demo2.name);
console.log(demo2.Gender);
console.log(demo2.Age);
demo2.email_id= "Kunjan@gmail.com";
console.log(demo2.email_id);
demo2.Age=21;
delete demo2.Gender;

// Object to String and back to Object demo
console.log("Output of Object to String and back to Object Demo");
console.log(demo2);
var demo3= JSON.stringify(demo2);
console.log(demo3);
var demo4= JSON.parse(demo3);
console.log(demo4);

// Spread demo
var a=[10,20,30,40];
var b=[...a];
console.log("Output of Spread Demo");
console.log(`value of a is ${a}, value of b is ${b}`);

// Rest Parameter Demo
function demo5(...d){
    console.log("Output of Rest Parameter Demo");
    console.log(d);
}
demo5(10,20,30,40,50);

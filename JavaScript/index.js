console.log('This is it')

// window.alert("I like pizza")

// variables
// declaration - let,var,const
// assignment - (=assignment operator)
let age = 20; //numbers
let fname = 'Lyons'; //string
let student = true; //boolean

document.getElementById("p1").innerHTML = "Hello " + fname;

// arithmetic operations 
let students = 20;
students = students + 1; //+=1
students = students - 1; //-=1
students = students * 2; //-*=2
students = students / 2; ///=2
let extra = students % 3;

/* 
    precedence
    1. parenthesis
    2. exponents
    3. multiplication and div
    4. add and sub
*/

console.log(extra);
console.log(students)

// user input
// manual
    // let username = window.prompt("Enter username");
    // console.log(username)
// with html
    document.getElementById("btn").onclick = () => {
        username = document.getElementById("myText").value;
        // type conversion
        // inputs are b default string
        let age = document.getElementById("age").value
        // console.log(typeof(age)) 
        age_ = Number(age) //convert to number //String(age) //Boolean("") - blank results to false
        // console.log(typeof(age_))
        document.getElementById("p1").textContent = "Hello " + username + ", aged: " + age_;
    }


//const - variable that should not be changed adds a little bit of data security
let radius = document.getElementById("age").value;
const PI = 3.14159;
let circumference;
circumference = 2 * PI * radius;
console.log(circumference)

//Math 
let x = 3.74
let y = 5
let z = 3
let max = Math.max(x, y, z);
let min = Math.min(x, y, z);

// x = Math.round(x)
// x = Math.ceil(x)
// x = Math.floor(x)
// x = Math.pow(x, 3)
// x = Math.sqrt(x)
// x = Math.abs(x) //distance away from 0
x = Math.PI

console.log(max);
console.log(min)
console.log(x);

// HYPOTENUSE CALC
// let a = window.prompt("Enter height")
// let b = window.prompt("Enter base")

//     // c = square root of (a2 +b2) 
// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
// console.log(c)
// complex

let btnx = document.getElementById("btnx")
btnx.addEventListener('click', () => {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c");

    let c_ = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    c.textContent = c_
})

// counter
// let count = document.getElementById("counter");
// let counter = 0;
// let btns = document.querySelectorAll(".bn");
// console.log(count.classList);
// console.log(btns);
// btns.forEach( element => {
//     console.log(element.classList)
//     element.addEventListener('click', e => {
//         if (element.classList.contains("increase")) {
//             counter += 1;
//             count.textContent = counter;
//         } else if(element.classList.contains("decrease")) {
//             counter -= 1;
//             count.textContent = counter;
//         } else{
//             counter = 0;
//             count.textContent = counter;
//         }
//     })
// });
let increase = document.getElementById("inc");
let reset = document.getElementById("res");
let decrease = document.getElementById("dec");
let count = document.getElementById("counter");
let counter = 0;

increase.addEventListener('click', () => {
    counter += 1;
    count.textContent = counter;
})
decrease.addEventListener('click', () => {
    counter -= 1;
    count.textContent = counter;
})
reset.addEventListener('click', () => {
    counter = 0;
    count.textContent = counter;
})

//  random number generator
document.getElementById("roll").addEventListener('click', () => {
    let v = Math.floor(Math.random() * 6) + 1; //btwn 1 & 6
    document.getElementById("vlabel").textContent = v
})

//string methods
let uname = "  Lyons Code  ";
let phone = "123-456-7890"

console.log(uname.length)
console.log(uname.charAt(0)) //character at the index
console.log(uname.indexOf("L")) //first occurrence
console.log(uname.lastIndexOf("o")) //last occurrence

uname = uname.trim() // removes all the spaces before and after characters
uname = uname.toLowerCase()
uname = uname.toUpperCase() 

phone = phone.replaceAll("-", " ")
console.log(phone)
console.log(uname)

// slice
    // extracts a section of a string and returns it as a new string without modifying the original
let f_names = "Lyons Code";
// manual
// let f_name = f_names.slice(0, 5);
// let l_name = f_names.slice(6)

// automated
f_name = f_names.slice(0, f_names.indexOf(" "));
l_name = f_names.slice(f_names.indexOf(" ") + 1);
console.log(f_names);
console.log(f_name + " & " + l_name);

// method chaining - calling on method after another
    // s_name = "Lyons Masawa";
    // let letter = s_name.charAt(1).toUpperCase()
    // console.log(letter)

// // if
// if (x >= 10) {
//     console.log("yes")
// } else {
//     console.log("no")
// }

// is checked
check = document.getElementById("subc")
check.addEventListener('click', () => {
    if (document.getElementById("myCheckbox").checked) {
        console.log("Subbed")
    } else {
        console.log("not subbed")
    }
})

    // radio buttons
visa = document.getElementById("visabtn")
master = document.getElementById("masterbtn")
paypal= document.getElementById("paypalbtn")

if (visa.checked) {
    console.log("visa");
} 
else if (master.checked) {
    console.log("master");
} 
else if (paypal.checked) {
    console.log("paypal");
}
else{
    console.log("no payment selected")
}

// switch
let grade = "A";

switch (grade) {
    case "A":
        console.log("excellent")
        break;
    
    case "B":
        console.log("good");
        break

    default:
        console.log("F")
        break;
}
// let gradex = "90";

// switch (false) {
//     case gradex > 80:
//         console.log("excellent")
//         break;
    
//     case gradex < 80:
//         console.log("good");
//         break

//     default:
//         console.log("F")
//         break;
// }


// while
    // let b_name = "";
    // while (b_name == "" || b_name == null ) {
    //     b_name = window.prompt("enter b_name");
    //     console.log("hey ", b_name );
    // }

    //

// do while
    // let b_name = ""
    // do {
    //     b_name = window.prompt("enter b_name");
    //     console.log("hey", b_name)
    // } while (b_name == "" || b_name == null);

// for loop && nested loops
    // for (let i = 0; i < 3; i++) {
    //     console.log(i, "lap");
    //     for (let j = 0; j < 3; j++) {
    //         console.log(j);        
    //     }
    // }

// break and continue
    // for (let i = 0; i < 10; i++) {
    //     if (i == 4) {
    //         // break; // quits loop
    //         continue; // skips 4 continues loop
    //     }
    //     console.log(i)
    // }


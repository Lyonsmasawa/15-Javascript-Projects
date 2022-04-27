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

    // console.log(extra);
    // console.log(students)

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

// if
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

// functions - define code once use it severally, call the functions name
// global variables - declared outside of functions or any curly braces
// variables declared with let are only accessible within the immediate set of curly braces
// return - returns a value to the place you invoked a function
    // startProg()
    // function startProg(){
    //     let fname = "`XXXX`";
    //     let age = 23;

    //     happyBirthday(fname, age)
    // }    
    // function happyBirthday(fname, age) {
    //     console.log("Happy birthday to you");
    //     console.log("Happy birthday to you");
    //     console.log("Happy birthday dear", fname);
    //     console.log("Happy birthday to you");
    //     console.log("You are", age, "years old");
    // }

// ternary operator - shortcut for if else statement
    // - 1, a condition with?
    // - 2, expression if True :
    // - 3, expression if False
    // condition? True: False

    // let adult = checkAdult(38);
    // console.log(adult)
    // function checkAdult(age) {
    //     return age >= 18 ? true : false
    // }

    // checkWinner(false)
    // function checkWinner(win) {
    //     win ? console.log("you win!"): console.log("you loose!");
    // }

// var && let
    // variable scope is where the variable is accessible
    // let - are limited to a block scope {} cant be accessed outside the immediate {}
    // var - can accessed outside a block scope {} but cant escape a function thus are limited to a function({})
    // global variable = is declared outside any function, entire program can access it
    // (if you declare a global var with var, it will be problematic as it will change browser's window properties)
    // e.g our window object has a property called name so var name would change it while let wont

// template literals - (``) back ticks
    let un = "LyonsX";
    let price = 3500;
    let txt = `Hello ${un}, please pay kshs.${price}`
    // console.log(`Hello ${un}, please pay kshs.${price}`)
    document.getElementById("literal").textContent = txt

    // toLocaleString() - returns a string with a language sensitive representation of this number
    // number.toLocaleString(locale, {options}) - locale-specify language(undefined - default set by browser), options- formatting options

        let myNum = 123456.789;
        let myNum2 = .789;
        let myNum3 = 12.789;
        // myNum = myNum.toLocaleString("en-US") //us english
        // myNum = myNum.toLocaleString("hi-HI") //hindi
        // myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"} )
        myNum = myNum.toLocaleString("hi-HI", {style: "currency", currency: "INR"} )
        myNum2 = myNum2.toLocaleString(undefined, {style: "percent"})
        myNum3 = myNum3.toLocaleString(undefined, {style: "unit", unit:"celsius"})
        console.log(myNum)
        console.log(myNum2)
        console.log(myNum3)

// guess
    const ans = Math.floor(Math.random() * 10 + 1);
    console.log(ans)
    let guesses = 0;
    let guessr = document.getElementById("guessr");
    document.getElementById("guessfield").onclick = () => {
        let guess = document.getElementById("guessfield").value;
        guesses ++;

        if (guess == ans) {
        guessr.textContent = `You got it in ${guesses} guesses'!`;
        }else if(guess < ans){
            guessr.textContent = `Try higher`;
        }else{
            guessr.textContent = `try lower`;
        }
    }

// temp conversion
    document.getElementById("submittm").onclick = () => {
        let temp = document.getElementById("tmp").value

        if (document.getElementById("cbutton").checked) {
            document.getElementById("cnv").textContent = toCelsius(temp) + "°C"

        } else if (document.getElementById("fbutton").checked) {
            document.getElementById("cnv").textContent = toFahrenheit(temp) + "°C"

        } else {
            document.getElementById("cnv").textContent = `Please select an option`;
        }
    }

    function toCelsius(temp) {
        return (temp-32) * (5/9);
    }
    function toFahrenheit(temp) {
        return temp * 9 / 5 +32;
    }

// arrays - like a variable that stores multiple values
    let fruits = ['apple', 'oranges', 'banana']
    console.log(fruits[2])
    console.log(fruits)
    fruits[2] = 'papaya'; 
    fruits.push("lemon"); //adds an element to the end
    fruits.pop() //removes last element
    fruits.unshift("Mango"); //adds an element to the start
    fruits.shift() //removes first element
    console.log(fruits.length) // array length
    console.log(fruits.indexOf("apple"));
    console.log(fruits)

    // loop through an array
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
    //inverse loop
    // for (let i = fruits.length - 1; i >= 0; i--) {
    //     console.log(fruits[i]);
    // }
    // another options
    for (let fruit of fruits) {
        console.log(fruit);
    }

// sort an array
    console.log("-- -- -- sort -- -- --")
    fruits.sort().reverse()
    for (let fruit of fruits) {
        console.log(fruit);
    }

// MULTI-DIMENSIONS 
// 2D array - an array of arrays
    let one_arr = [1,2,3,4,5,6];
    let two_arr = [11,12,13,14,15,16];
    let three_arr = [21,22,23,24,25,26];

    let all_arr = [one_arr, two_arr, three_arr]
    all_arr[2][[5]] = 38;
    for (let list of all_arr) {
        for (let number of list) {
            console.log(number)
        }
    }

// spread operator - allows an iterable e.g(array or string) to be expanded in places where 0 or more arguments are expected(unpacks the element)
    let t_arr = [21,22,23,24,25,26];
    let s_arr = "Lyons code";
    console.log(...s_arr) //it spreads the values into individuals
    console.log(...t_arr) 
        //useful?
        console.log(Math.max(t_arr)); //returns NaN because its an array
        console.log(Math.max(...t_arr)); //works

        //another?
        let class1 = ["qwerty", "asdf", "sdfg"];
        let class2 = ["fhgj", "gjhk", "jgjjg", "guoor"]
        class1.push(...class2) //adds individuals instead of a single array
        // for (let item of class2) {
        //     class1.push(item)
        // }
    //its like opening a box and removing whats inside - spread
        console.log(class1)

// rest - represents an indefinite number of parameters (packs arguments into an array and its up to you to access it) 
    //  lets build a function that can receive an indefinite numbers of parameters
    let a = 1;
    let b = 2;
    let c = 3;
    let d = 4;
    let e = 5;

    console.log(sum(a, b, c));
    function sum(...numbers)
    // could be sum(x, y, ...numbers)
    {
        let total = 0;
        for (let number of numbers) {
            total += number
        }
        return total;
    }

// callback - a function passed as an argument to another function
    // ensures a function wont run until a task is completed
    // helps dev asynchronous code - where one function waits for another function to finish 
    // that helps us avoid potential problems
    sumx(2, 3, displayConsole, displayDom)

    function sumx(x, y, callBack, domCall) {
        let result = x +y;
        callBack(result)
        domCall(result)
    }
    function displayConsole(output) {
        console.log(output)
    }
    function displayDom(output) {
        document.getElementById("domx").textContent = output;
    }

// array.forEach() - executes a provided callback function for each element once for each array element
    let inhabits = ["spongebob", "partrick", "squidward", "mr.krabs"];
    inhabits.forEach(capitalize);
    inhabits.forEach(print);
    // for each method behind the scenes provides us with upto 3 arguments automatically - element, index and array 
    function capitalize(element, index, array) {
        array[index] = element[0].toUpperCase() + element.substring(1);
    };
    function print(element) {
        console.log(element)
    }

// array.map() -  executes a provided callback function once for each array element and creates a new array
    let nx = [1, 2, 3, 4, 5];
    let squares = nx.map(square);
    squares.forEach(print)

    function square(element) {
        return Math.pow(element, 2);
    }

    function print(element) {
        console.log(element)
    }

// filter() - creates a new array with all elements that pass the test provided by an function
    console.log("-------filter-------")
    let ages = [12,13,38,46,58];
    let adults = ages.filter(checkAges)
    adults.forEach(print)

    function checkAges(element) {
        return element>= 18;
    }
    function print(element) {
        console.log(element)
    }

// reduce() - reduces an array to a single value
    console.log("-------reduce-------")
    let prices = [12,122,144,567]
    let total = prices.reduce(checkOut);
    console.log(`the total is ${total}`)

    function checkOut(total, element) {
        return total + element;
    }
    
    function print(element) {
        console.log(element)
    }

// sort an array of numbers
    let grdes = [90,56,98,70,70]
    // console.log(...grdes.sort().reverse())
    // or
    console.log(grdes.sort(ascendingSort))

    function descendingSort(x, y) {
        return y - x;
    }
    function ascendingSort(x, y) {
        return x - y;
    }

// function expression - function without a name(anonymous function) - avoid polluting the global scope with names, write it and forget about it
    const greeting = function () {
        console.log("Hello")
    } 
    greeting()

// arrow functions

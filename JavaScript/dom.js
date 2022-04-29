// DOM - Document Object Model (its technically API) - used to change the content of a page
    // document is the entry point of our dom
    console.log(document) //displays everything within the document
    // console.dir(document) //lists all properties of document
    document.title = "Try this out"; //changes title
    document.body.style.backgroundColor = "cyan";
    // document.getElementById("try").innerHTML = "Hello";
    // document.location = "https://www.google.com"; //opens google

// element selectors
    // getElementById
    let element = document.getElementById("myTitle");
    element.style.backgroundColor = "blue";

    // getElementsByName
    let fruits = document.getElementsByName("fruits");
    console.log(fruits)
    fruits.forEach(fruit => {
        if (fruit.checked) {
            console.log(fruit.value)
        }
    })

    // getElementsByTagName
    let vegetables = document.getElementsByTagName("li");
    console.log(vegetables)
    vegetables[1].style.fontStyle = "italic";

    // getElementsByClassName
    let desserts = document.getElementsByClassName("desserts");
    console.log(desserts);
    desserts[1].style.fontStyle = "italic";

    // querySelector - you can select with the upper choices(universal), if there are several it takes the first child
    document.querySelector("#myTitle").style.fontStyle = "italic";
    document.querySelector("[for]").style.backgroundColor = "red"; //select using attributes

    // querySelectorAll - selects all and places them in like an array
    // document.querySelectorAll("li").forEach(element => {
    //     element.style.backgroundColor = "yellow";
    // })

// DOM traversal
    let elements = document.querySelector(".body")
    console.log(elements)
        // .firstElementChild
        elements.firstElementChild.style.backgroundColor = "green";

        // .lastElementChild
        elements.lastElementChild.style.backgroundColor = "orange";

        // .parentElement
        elements.parentElement.style.background = "black";
        elements.parentElement.style.color = "white";

        // sibling
        document.getElementById("veg").nextElementSibling.style.background = "red";
        document.getElementById("veg").previousElementSibling.style.background = "orange";

        // children
        document.getElementById("veg").lastElementChild.style.background = "red";
        document.getElementById("veg").firstElementChild.style.background = "red";
        document.getElementById("veg").children[1].style.background = "black";
            //all children
            let children = Array.from(elements.children); //returns a collection of all the children then we can change it to array to use for each
            children.forEach(child => {
                child.style.backgroundColor = "blue";
            })

// add or change html elements
    // either use innerHtml(vulnerable to XSS attacks) or textContent(more secure) 
    // let location_ = document.getElementById("two");
    // location_.style.paddingLeft = "5px";
    // let nameTag = document.createElement("h1");
    // allows you to assign some tags along with text which means a malicious code(script) can be placed
    // nameTag.innerHTML = window.prompt("enter name");
    // but if you use a textContent it passes everything as a text including malicious code
    // nameTag.textContent = ("Lyons")
    // location_.append(nameTag);
    let list_ = document.getElementById("addChange");
    let l_item = document.createElement("li");
    l_item.textContent = "mango";
    // list_.prepend(l_item); // top
    // list_.append(l_item) // bottom
    // middle
            list_.insertBefore(l_item, list_.getElementsByTagName("li")[2])

// change css properties
    const t = document.getElementById("myT");
    t.style.color = "rgb(50, 200, 250)";
    t.style.fontFamily = "consolas";
    t.style.textAlign = "center";
    t.style.background = "#222222";
    t.style.display = "block";
    t.style.border = "2px solid";

// events - some action a user or browser does
    // let bn = document.getElementById("myButton");
    const myText = document.getElementById("myText");
    const myDiv = document.getElementById("myDiv");

    // bn.onclick = doSomething();
    // element.onload = doSomething();
    // myText.onchange = doSomething();
    // myDiv.onmouseover = doSomething(myDiv)
    // myDiv.onmouseout = doSomethingElse()
    // myDiv.onmousedown = doSomething()
    // myDiv.onmouseup = doSomething()


    // function doSomething(e) {
    //     e.style.backgroundColor = "red";
    // }

// addEventListener(event, function, useCapture) - can add as many events or same events that invokes one function
    // useCapture - what happens when parent and child are waiting for the same(which will be handled first)
    const innerDiv = document.getElementById("innerDiv");
    const outerDiv = document.getElementById("outerDiv");      

    innerDiv.addEventListener("mouseover", changeColor);
    innerDiv.addEventListener("mouseout", revertColor);

    function changeColor(){
        innerDiv.style.background = "red";
    }

    function revertColor(){
        innerDiv.style.background = "lightgreen";
    }
    
    // useCapture - handles true first
    innerDiv.addEventListener("click", changeBlue)
    outerDiv.addEventListener("click", changeBlue, true)
    function changeBlue(){
        this.style.background = "blue";
    }
// 

// show and hide html element
    mtn = document.getElementById("mtn");
    myImg = document.getElementById("myImg");
    console.log(myImg)

    mtn.addEventListener("click", () => {
        if (myImg.style.display == "none") {
            myImg.style.display = "block";
        } else {
            myImg.style.display = "none";
        }
    })
    // using visibility
    mtn2 = document.getElementById("mtn2");
    myImg2 = document.getElementById("myImg2");
    console.log(myImg)

    mtn2.addEventListener("click", () => {
        if (myImg2.style.visibility == "hidden") {
            myImg2.style.visibility = "visible";
        } else {
            myImg2.style.visibility = "hidden";
        }
    })

// detect key presses
    // window.addEventListener("keydown", event => {
    //     console.log(event)
    // })
    const move = document.getElementById("move");
    window.addEventListener("keydown", move_)
    let x = 0;
    let y = 0;

    function move_(event) {
        switch (event.key) {
            case "ArrowDown":
                
                break;
        
            default:
                break;
        }        
    }
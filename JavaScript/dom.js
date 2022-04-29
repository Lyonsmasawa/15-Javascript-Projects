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
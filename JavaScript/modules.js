// ES6 modules - the idea behind a module is that its a file of reusable code
    // we can import sections of pre-written code to use whenever
    // great for any general utility values, makes your code reusable and easy to maintain
    // think of them as different chapters in a book
        // to begin add this to your script tag in html "type="module" "
        // create the js file - export functions
        // import the exported stuff
            // import{getArea, getCircumference} from "./math_util.js" //must be at the top
            // console.log(getCircumference(10))
            // console.log(getArea(10))
        // another way to import if too many
        import * as MathUtil from "./math_util.js";
        console.log(MathUtil.getArea(10))
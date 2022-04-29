// Canvas API - a means for drawing graphics, used for animations, games, data visualization
    function drawLine() {
        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext("2d")
        // imagine the context is a painting within a frame while the canvas is both the picture and the frame
        // so to draw on the canvas we draw on the context itself not the frame

        // styles
        context.strokeStyle = "red";
        context.lineWidth= 2;
        // DRAW LINE
        context.beginPath(); //to begin drawing
        context.moveTo(0, 0); //starting coordinates - placing our brush on the canvas
        context.lineTo(50, 50) 
        context.lineTo(50, 100)
        context.moveTo(100, 0);
        context.lineTo(50, 50) 
        context.stroke();
    }
    drawLine()

// DRAW TRIANGLE
    function drawTriangle() {
        let canvas2 = document.getElementById("myCanvas2");
        let triangle = canvas2.getContext("2d")

        
        triangle.lineWidth = 2;
        
        triangle.beginPath();
        triangle.moveTo(50, 0);
        triangle.lineTo(0, 100);
        triangle.lineTo(100, 100);
        triangle.lineTo(50, 0)
        triangle.stroke()
    }
    drawTriangle()

// DRAW RECTANGLE
    function drawRec() {
        let canvas3 = document.getElementById("myCanvas3");
        let rectangle = canvas3.getContext("2d") 

        rectangle.fillStyle = "red";
        rectangle.fillRect(19, 35, 60, 30);
        rectangle.strokeStyle = "green";
        rectangle.strokeRect(10, 26, 80, 50); //top left corner followed by width and height

    }
    drawRec()

// DRAW CIRCLE - (x, y, r, eAngle, counterclockwise)
    function drawCircle() {
        let canvas4 = document.getElementById("myCanvas4");
        let circle = canvas4.getContext("2d") 

        circle.beginPath();
        circle.arc(50, 50, 40, 0, 2 * Math.PI)
        circle.stroke()
        circle.fill();
    }
    drawCircle()

// DRAW TEXT
    function drawText() {
        let canvas5 = document.getElementById("myCanvas5");
        let text = canvas5.getContext("2d") 

        text.font = "15px MV Boli";
        text.fillStyle = "red";
        text.textAlign = "center";
        text.fillText("YOU WIN!", canvas5.width/2 , canvas5.height/2)

    }
    drawText()
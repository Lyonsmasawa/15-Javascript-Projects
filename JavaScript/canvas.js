// Canvas API - a means for drawing graphics, used for animations, games, data visualization
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d")
    // imagine the context is a painting within a frame while the canvas is both the picture and the frame
    // so to draw on the canvas we draw on the context itself not the frame

    // styles
    
    // begin
    context.beginPath(); //to begin drawing
    context.moveTo(0, 0); //starting coordinates - placing our brush on the canvas
    context.lineTo(250, 250) 
    context.lineTo(250, 500)
    context.moveTo(500, 0);
    context.lineTo(250, 250) 
    context.stroke();
const myBtn = document.getElementById("myBtn");
const myBtnR = document.getElementById("myBtnR");
const myDiv = document.getElementById("myDivx");

myBtn.addEventListener("click", begin);

// slide
    function begin() {
        let timerId = null;
        let x = 0;
        let y = 0;

        timerId = setInterval(frame, 5);

        function frame() {
            if (x >= 300 || y >= 300) {
                clearInterval(timerId);
            } else {
                x+=1;
                y+=1;
                myDiv.style.left = x + "px";
                myDiv.style.top = y + "px";
            }
        }
    }

// rotate
myBtnR.addEventListener("click", rotate);

function rotate() {
    let degrees = 0;
    let x = 0;
    let y = 0;


    let timer = setInterval(rot, 5);

    function rot() {
        if (degrees >= 360) {
            clearInterval(timer)
        } else {
            degrees += 1;
            myDiv.style.transform = "rotateZ("+degrees+"deg)";

            x+=1;
                y+=1;
                myDiv.style.left = x + "px";
                myDiv.style.top = y + "px";
        }
    }
}


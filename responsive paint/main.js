// class 83 project
var last_x, last_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    var mouseIsDown=false;

    color = "black";
    width_of_line = 5;

    var width=screen.width;

    new_width=screen.width-70;
    new_hieght=screen.height-300;

    if(width < 992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_hieght;
    }

    function my_move(x, y){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("last__ position of x and y coordinates= ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("current position of x and y coordinates is = ");
        console.log("x = "+x+"y = "+y);
        ctx.lineTo(x, y);
        ctx.stroke();

        last_x=x;
        last_y=y;
    }

    function my_start(x, y){
        last_x=x;
        last_y=y;
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("widthinp").value;
    }


    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e)
    {
            console.log("my_touchstart");
            //Addictonal Activity start
        my_start(
            e.touches[0].clientX-canvas.offsetLeft,
            e.touches[0].clientY-canvas.offsetTop);
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e){
        console.log("my_touchmove");
        my_move(
            e.touches[0].clientX-canvas.offsetLeft,
            e.touches[0].clientY-canvas.offsetTop);
    }

    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e){
        mouseIsDown=true
        console.log("my_mousedown");
        my_start(
            e.clientX-canvas.offsetLeft,
            e.clientY-canvas.offsetTop);
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e){
        console.log("my_mousemove");
        if(mouseIsDown){
            my_move(
                e.clientX-canvas.offsetLeft,
                e.clientY-canvas.offsetTop);
        }
    }
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e){
        console.log("my_mouseup");
        mouseIsDown=false
    }
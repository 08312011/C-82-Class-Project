canvas=document.getElementById("myCanvas");
var mouseEvent="empty"
color="red";

var last_position_of_x, last_position_of_y;

ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)

{
   // color=document.getElementById("color").value
mouseEvent="mouseDown";

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("my_mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListener("my_mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_x=e.clientX - canvas.offsetLeft;
    current_position_of_y=e.clientY - canvas.offsetTop;
 
if (mouseEvent==mouseDown){
ctx.BeginPath();
ctx.strokeStyle=color;
ctx.lineWidth= 2

ctx.moveTo(last_position_of_x, last_position_of_y);

ctx.lineTo(current_position_of_x, current_position_of_y);
ctx.stroke();
}

last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;

}
//tania.roy@byjusteachers.com
//current_position_of_mouse_y, radius ,0 , 2 * Math.PI);




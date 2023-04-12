let x=Number(document.getElementById("ball-object").style.left);
let y=Number(document.getElementById("ball-object").style.top);
let dx=5;
let dy=5;
function draw(){
    if(x+dx>1000-50 || x+dx<0){
        dx=-dx;
    }
    if(y+dy>600-50 || y+dy<0){
        dy=-dy;
    }
    x+=dx;
    y+=dy;
    document.getElementById("ball-object").style.left=x+"px";
    document.getElementById("ball-object").style.top=y+"px";
}
setInterval(draw,5);

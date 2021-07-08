var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('BirthdayImage.jpg',function (Img)
{
blockimgobject=Img
blockimgobject.scaleToWidth(700);
blockimgobject.scaleToHeight(510);
blockimgobject.set({
top:0,left:0
})
canvas.add(blockimgobject)
})
}

function playsound(){
x.play()
}

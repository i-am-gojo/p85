//Create a reference for canvas 
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
//Give specific height and width to the car image
greenCarWidth=75
greenCarHeight=100

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greenCar_x=5
greenCar_y=225

function add() {
	bg_imgTag= new Image();
	bg_imgTag.onload= uploadBackground;
	bg_imgTag.src=background_image

	greenCar_imgTag= new Image();
	greenCar_imgTag.onload= uploadgreencar;
	greenCar_imgTag.src=greencar_image
}

function uploadBackground() {
	ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greenCar_imgTag,greenCar_x,greenCar_y,greenCarWidth,greenCarHeight);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greenCar_y>=0){
		greenCar_y=greenCar_y-10
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greenCar_y<=400){
		greenCar_y=greenCar_y+10
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greenCar_x>=0){
		greenCar_x=greenCar_x-10
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greenCar_x<=800){
		greenCar_x=greenCar_x+10
		uploadBackground();
		uploadgreencar();
	}
}

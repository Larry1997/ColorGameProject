var numberOfSquares=6;
var colors=generateRandomColors(numberOfSquares);

var squares= document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var pickedColor=pickColor();
var resetButton=document.querySelector("#resetbtn");

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


colorDisplay.textContent =pickedColor;

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares=3;
	colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent =pickedColor;

	for( var i=0;i< squares.length;i++)
{
	//since there are only 3 colors in easy mode, we can use this trick
	if( colors[i]){
		squares[i].style.background=colors[i];

	}
	else{
		squares[i].style.display="none";
	}
}
})


hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares=6;
	colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent =pickedColor;

	for( var i=0;i< squares.length;i++)
{
	//since there are only 3 colors in easy mode, we can use this trick
	
		squares[i].style.display="block";
	
		squares[i].style.background=colors[i];

}
})


resetButton.addEventListener("click",function()
{
	messageDisplay.textContent=" ";
	resetButton.textContent="New Colors";
	h1.style.background="steelblue";
	//generate all new colors
	colors=generateRandomColors(numberOfSquares);

	//pack a new random color
	pickedColor=pickColor();
	colorDisplay.textContent =pickedColor;
	//change colors of squares
	for( var i=0;i< squares.length;i++)
{
	squares[i].style.background=colors[i];
}

});


for( var i=0;i< squares.length;i++)
{
	//this adds initial color to squares
	squares[i].style.background=colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		

	//chech which color user picked and
	var clickedcolor=this.style.background;
	//compare it with our pickedColor
	if(clickedcolor===pickedColor){
		messageDisplay.textContent="Correct!";
		changeColors(pickedColor);
		h1.style.background=clickedcolor;
		resetButton.textContent="Play Again?";
		
	}
	else{
		this.style.background="#232323";
		messageDisplay.textContent="Try Again!";
		
	}
	});

}


function changeColors(color) {
	// loop through all squares and chnage each color 
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background=color;
	}
}

function pickColor() {
	var random=Math.floor(Math.random()* colors.length);
	return colors[random];
	
}

function generateRandomColors(num) {
	// body...
	//make an array
	var arr=[]
	//add num number of  random colors to array
	for (var i = 0; i < num; i++) {
	//get random color amd push into array
	arr.push(randomColor());
	}

	//return array
	return arr;
}
function randomColor(){
	//pick red,green,blue from 0-255
	var r=Math.floor(Math.random()*256); //it wont go for 256, only till 255
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	console.log("rgb("+ r+","+ g+","+ b+")");
	return "rgb("+ r+", "+ g+", "+ b+")";

}

	
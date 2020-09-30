var dog

function preload()
{
this.Dog = loadImage("images/dogimg.png,images/doging2");
}

function setup() {
	createCanvas(800, 700);
  
dog = new Dog (200,200,20,20);

}


function draw() {  

  drawSprites();
  //add styles here

}




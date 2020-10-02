
//button selection by click of mouse
for (var i=0; i<7;i++){
		      document.querySelectorAll('.drum')[i].addEventListener('click',function(){
		      console.log(this);
          console.log(this[i]);
		      pressedAnimation(this);
		      makeSound((this.innerHTML).toLowerCase());
		});
}

//keyboard selection 'keydown' and its key value
document.addEventListener('keydown', function(event){

		var classOfKey = document.querySelector('.'+event.key);
		pressedAnimation(classOfKey);
		makeSound(event.key); //calling make sound to make make sound upon key pressed.
});

//function to makesound.
function makeSound(keyOrButton){
	switch(keyOrButton){
		case 'w':
				var tom1= new Audio('sounds/tom-1.mp3');
  				tom1.play();
  				break;
  		case  'a':
  				var tom2=new Audio('sounds/tom-2.mp3');
  				tom2.play();
  				break;
  		case  's':
  				var tom2=new Audio('sounds/tom-3.mp3');
  				tom2.play();
  				break;
  		case  'd':
  				var tom2=new Audio('sounds/tom-4.mp3');
  				tom2.play();
  				break;
  		case  'j':
  				var tom2=new Audio('sounds/snare.mp3');
  				tom2.play();
  				break;
  		case  'k':
  				var tom2=new Audio('sounds/kick-bass.mp3');
  				tom2.play();
  				break;
  		case  'l':
  				var tom2=new Audio('sounds/crash.mp3');
  				tom2.play();
  				break;		
  		default:
  			console.log('error');


	}
	
}

function pressedAnimation(inputClassOrKey){
	inputClassOrKey.classList.add('pressed');
	setTimeout(function(){
		inputClassOrKey.classList.remove('pressed');
	},100);

  }


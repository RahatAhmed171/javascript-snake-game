let score_count=0
var ran_x=0;
var ran_y=0;
var food_x=0;
var food_y=0;
var score=0
var food_horizontal=10;
var food_vertical=10;

var canvas=document.querySelector('canvas');
canvas.width=500;
canvas.height=500;
var c=canvas.getContext('2d');
var food=canvas.getContext('2d');

let my_snake=[{x:200,y:100},{x:190,y:100},{x:180,y:100},{x:170,y:100},];
c.fillStyle='lightgreen';
c.strokestyle='red';

let dx=10;
let dy=0;


function clear_canvas(){
  c.clearRect(0,0,canvas.width,canvas.height);
}

function total_snake(){
  my_snake.forEach(drawsnake);
}
function drawsnake(snakePart){

  c.strokeRect(snakePart.x,snakePart.y, 10,10)
  c.fillRect(snakePart.x,snakePart.y,10,10);
  
  

}

function movement(){
  var head={x:my_snake[0].x+dx,y:my_snake[0].y+dy};
  my_snake.unshift(head);
  my_snake.pop();
  if (head.x<-5){
    document.querySelector('h2').innerHTML = "Game Over. Refresh the page to restart the game";
    abort();
  }
  if (head.x==canvas.width){
    document.querySelector('h2').innerHTML = "Game Over. Refresh the page to restart the game";
    abort();
  }
  if (head.y<-5){
    document.querySelector('h2').innerHTML = "Game Over. Refresh the page to restart the game";
    abort();
  }
  if (head.y==canvas.height){
    document.querySelector('h2').innerHTML = "Game Over. Refresh the page to restart the game";
    abort();
  }
  if(head.x==food_horizontal && head.y==food_vertical){
    score=score+5;
    score_count=score_count+1
    my_snake.push({x:160,y:100})
    document.querySelector('h2').innerHTML ="Score:"+score;
    if(score_count==10){
      score_count=0;
      main();
      
    }
    ran_x=Math.random()*canvas.width;
    ran_y=Math.random()*canvas.height;
    food_horizontal=(Math.round(ran_x / 10) * 10);
    food_vertical=(Math.round(ran_y / 10) * 10);
  
    console.log(food_horizontal);
    console.log(food_vertical);
    if(food_horizontal>=500){
      food_horizontal=20;
    }
    if(food_vertical>=500){
      food_vertical=30;
    }
  
    
  
    
    
  }
}





function main(){
  game_start=setTimeout(function onTick(){
    clear_canvas();
    food.fillStyle='lightgreen';
    food.strokestyle='red';
   
    console.log(food_horizontal);
    console.log(food_vertical);
    food.strokeRect(food_horizontal,food_vertical, 10,10)
    food.fillRect(food_horizontal,food_vertical,10,10);
    total_snake();
    movement();
    main();
  },100);
}

window.addEventListener('keydown', function(e) {
    switch (e.key) {
        case 's':
        document.querySelector('h2').innerHTML = "";
        
          dx=10;
          dy=0;
          main();

        case 'ArrowLeft':
          if (dx==10){
            break;
          }
          else{
            dx=-10;
            dy=0;
            
            
            break;
          }
        case 'w':
          if (dy==10){
            break;
          }
          else{
           
           dx=0;
           dy=-10;
           
           
            break;
          }
        case 'ArrowRight':
        if (dx==-10){
            break;
          }
          else{
            dx=10;
            dy=0;
            
            
            break;
          }
            break;
        case "ArrowDown":
          if (dy==-10){
            break;
          }
          else{  
            dx=0;
            dy=10;
            
          
           
            break;
          }
    }
});



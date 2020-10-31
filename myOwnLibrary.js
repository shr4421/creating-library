
// function bouncing: This function can be used to determine if two objects have collided and therefore make them bounce Off each other by reversing their velocity .
// give the two objects between which you want to bounce as arguments (bouncing(name of first object , name of second object)).

function bouncing(obj1,obj2){

    if(obj1.x-obj2.x<=obj1.width/2+obj2.width/2 && 
      obj2.x-obj1.x<=obj1.width/2+obj2.width/2 &&
      obj1.y-obj2.y<=obj1.height/2+obj2.height/2 &&
      obj2.y-obj1.y<=obj1.height/2+obj2.height/2){
    
       obj1.velocityX=obj1.velocityX*-1;
       obj2.velocityX=obj2.velocityX*-1;

    
    }
    
    else{
    
      obj1.velocityX=obj1.velocityX;
      obj2.velocityX=obj2.velocityX;
      
    
    }
  
  
  }

// function touching: This function can be used to determine if two objects have collided and return true(yes) or false (no) .
// give the two objects between which you want to check if they have touched or not as arguments (touching(name of first object , name of second object)).

  function touching(obj1,obj2){

    if(obj1.x-obj2.x<=obj1.width/2+obj2.width/2 && 
      obj2.x-obj1.x<=obj1.width/2+obj2.width/2 &&
      obj1.y-obj2.y<=obj1.height/2+obj2.height/2 &&
      obj2.y-obj1.y<=obj1.height/2+obj2.height/2){
    
      return true;
    
    }
    
    else{
    
      return false;
    
    }
  
  
  }
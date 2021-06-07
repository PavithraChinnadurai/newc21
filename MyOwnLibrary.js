function isTouching(mobj1,fobj2){
    if(mobj1.x-fobj2.x< (mobj1.width/2+fobj2.width/2) && 
    fobj2.x-mobj1.x<(mobj1.width/2+fobj2.width/2) &&
    mobj1.y-fobj2.y<(mobj1.height/2+fobj2.height/2) && 
     fobj2.y-mobj1.y<(mobj1.height/2+fobj2.height/2)){
  return true;
   }
   else{
    return false;
   }
  
  }
  
function bounceOff(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {

  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
  
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    console.log(movingRect.velocityY * (-1));
    console.log(fixedRect.velocityY * (-1));
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
}
}


const game1 = [0, 0, 1, 0, 0, 1, 0];
const game2 = [0, 0, 0, 0, 1, 0];

function jumpingOnTheClouds(c) {
  let currentCloud = 0;
  let jump = 0;

  while(currentCloud < c.length -1){
    if(c[currentCloud + 2] == 0) {
      currentCloud += 2;
      jump++;
    } else {
      currentCloud++
      jump++
    }
  }
  return jump
}

jumpingOnTheClouds()
function countAllFromTown(regNum, regLoc){
    var fromTown = regNum.split(',');
    var countFromTown = 0;
  
    var isTown = [];
    var i=0;
    while(i<fromTown.length){
      var town = fromTown[i].trim();
      if(town.startsWith(regLoc)){
      isTown.push(town);
        countFromTown +=1;
      }
      i++
    }
    console.log(countFromTown)
   return countFromTown;
  }
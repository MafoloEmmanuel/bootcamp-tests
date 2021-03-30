function countAllPaarl(regNum){
    var allPaarl=regNum.split(',');
     var isPaarl=[];
     var countPaarl=0
      var i=0;
     while(i<allPaarl.length){
     var fromPaarl = allPaarl[i].trim();
       //console.log(allPaarl);
       if(fromPaarl.startsWith('CJ')){
       isPaarl.push(fromPaarl);
         //console.log(fromPaarl);
         countPaarl +=1;
       }
       
       i++;
     }
     
    return countPaarl;
   }
   console.log(countAllPaarl('CJ 182736,CJ 523519, CD 188936'))
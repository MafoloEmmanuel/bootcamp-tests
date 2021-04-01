function findItemsOver(itemList, threshold){
    //console.log(itemList);
    var arr2= [];
      for(var i=0;i<itemList.length;i++){
       var theItem = itemList[i];
    if(theItem.qty>threshold){
    arr2.push(theItem);
    }
  }
    console.log(threshold);
    return arr2;
  }
function findItemsOver20(itemList){
    var arr1=[]
      for(var i=0;i<itemList.length;i++){
      var item = itemList[i];
        if(item.qty> 20){
          arr1.push(item);
        }
        
  }console.log(arr1);
    return(arr1);
  }
  
  
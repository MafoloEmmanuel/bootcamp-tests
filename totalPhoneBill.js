function totalPhoneBill(phoneBill){
    var isPhoneBill = phoneBill.split(', ');
      
      var isTotalBill=0;
      for(var i=0;i<isPhoneBill.length;i++){
      var isBill= isPhoneBill[i].trim();
      
       if(isBill == 'call'){
       isTotalBill += 2.75;
       } else if(isBill == 'sms'){
       isTotalBill += 0.65
       }
    }
      console.log("R" + isTotalBill.toFixed(2));
       return "R" + isTotalBill.toFixed(2);// rounds off to the 2nd decimal place
    }
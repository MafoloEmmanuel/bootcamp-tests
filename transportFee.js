function transportFee(shift){
    if(shift === 'morning'){
        return ('R' + 20);
    } else if(shift === 'afternoon'){
        return ('R' + 10);
    } else if(shift === 'nightshift'){
        return 'free';
    }
      
    }
    
    console.log(transportFee('afternoon'))
    console.log(transportFee('afternoon'))
    console.log(transportFee('nightshift'))
    
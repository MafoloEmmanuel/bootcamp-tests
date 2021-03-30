function isWeekday(theDay){
    const day = new Date();
       return theDay.startsWith('M')
                  || theDay.startsWith('W') || theDay.startsWith('T') 
                      || theDay.startsWith('F' )
    }
    console.log(isWeekday('Saturday'))
    console.log(isWeekday('Monday'))
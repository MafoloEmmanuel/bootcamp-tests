function regCheck(regNum, regLoc){
    return regNum.endsWith(regLoc);
    }
    console.log(regCheck('DV 23 LP GP', 'MP'));
    console.log(regCheck('BH 45 BG GP' , 'GP'));
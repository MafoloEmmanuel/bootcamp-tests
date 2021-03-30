function yearsAgo(year){
    const date = new Date();
    const theyear = date.getFullYear()-year;
    return theyear;
    
  }
  console.log(yearsAgo(1999));
  console.log(yearsAgo("1995"));
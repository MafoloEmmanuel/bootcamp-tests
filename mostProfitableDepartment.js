function mostProfitableDepartment(profitableDepartment){
	const departmentMap= {};
for(var i=0;i<profitableDepartment.length;i++){
const isDepartment= profitableDepartment[i];
  departmentMap[isDepartment.department]=0
}

  for(var i=0;i<profitableDepartment.length;i++){
    const isDepartment= profitableDepartment[i];
    var currentDepartment= departmentMap[isDepartment.department]
    currentDepartment += isDepartment.sales
     departmentMap[isDepartment.department] = currentDepartment;
  }
var currentMaxSales=0;
  var isCurrentDepartment = "";
  //console.log(departmentMap);
  for(const departmentName in departmentMap){
   // console.log(departmentName);
  //console.log(departmentMap[departmentName]);
    const currentDepartmentSales = departmentMap[departmentName];
    if(currentDepartmentSales > currentMaxSales){
      currentMaxSales= currentDepartmentSales;
      isCurrentDepartment= departmentName;
    }
    
  }
 // console.log(currentMaxSales)
//  console.log(isCurrentDepartment)
  return isCurrentDepartment;
}
function isFromBellville(vehicle){
    return vehicle.startsWith('CY');
 }
 console.log(isFromBellville('CA 0986'));
 console.log(isFromBellville('CY 0986'));
 console.log(isFromBellville('Cy 0986'));
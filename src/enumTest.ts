
 enum ENUM_TEST {
    menos2 = -2, 
    menos1, 
    cero,
    calculo = calculoComplejo(20),
    dobleCalculo = calculo * 2,
}
  
 function calculoComplejo( numero : number  ): number {
    return numero * 3;
}


console.log("menos2 ", ENUM_TEST.menos2)

console.log("menos1 ", ENUM_TEST.menos1)

console.log("calculo ", ENUM_TEST.calculo)

console.log("dobleCalculo ", ENUM_TEST.dobleCalculo)

console.log("calculo otra vez: ", ENUM_TEST["calculo"])






/* 
const redondeo = [10, 50, 100, 300, 450];

function calculoInterno( saldo: number  ): number |  undefined {

    return redondeo.find(element => element > saldo*1.15); 
}
*/
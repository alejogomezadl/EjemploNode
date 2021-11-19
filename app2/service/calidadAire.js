const calcular = (maxPM10, actualPM10,maxPM30, actualPM30) => {

    let porcentajePM10 = porcentaje(maxPM10,actualPM10);
    let porcentajePM30 = porcentaje(maxPM30,actualPM30);

    return {
         porcentajePM10, 
         porcentajePM30 
        }
}


const porcentaje = (max,actual) =>{
    if (max > 0) {
        return (actual * 100 / max);
    }
    return 0;
}


module.exports.calcularPorcentaje = calcular;
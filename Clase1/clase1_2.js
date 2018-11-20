var productos=[
    {
        nombre:"Harina",
        fechaVecn:{
            dia:15,
            mes:12,
            año:2019,
        },
        precios:[150,200,225],
    },
    {
        nombre:"Arroz",
        fechaVecn:{
            dia:22,
            mes:10,
            año:2020,
        },
        precios:[160,190],
    }
]
//Un Ciclo para Recorrer los Productos
for (j=0;j<productos.length;j++){
    //Se Accede a los Atributos del producto
    console.log("Precios de "+productos[j].nombre)
    console.log("Se vence el año "+productos[j].fechaVecn.año)
    //Un Ciclo para Recorrer los Precios
    for (i=0;i<productos[j].precios.length;i++){
        console.log(productos[j].precios[i]+" Bs.")
    }
}
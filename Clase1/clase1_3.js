
function Fecha(dia,mes,año){
    this.dia = dia;
    this.mes = mes;
    this.año = año;
}

function Producto(nombre,existencia,precios,fecha){
    this.nombre     = nombre;
    this.existencia = existencia
    this.fechaVecn  = fecha,
    this.precios    = precios;
    this.saludar   = function (){ 
        console.log("Bienvenido;") 
    };
}
//1er Metodo de Agregar Atributo Fecha
var vencHarina = new Fecha(5,10,2018)
var harina = new Producto("Harina",20,[250,270,300],vencHarina)

//2er Metodo de Agregar Atributo Fecha
var arroz = new Producto("Arroz",15,[],new Fecha(15,10,2019))
arroz.precios.push(150);

var vencPasta=new Fecha(25,03,2019)
var pasta=new Producto("Pasta",10,[480],vencPasta)

var productos=[];
productos.push(harina);
productos.push(arroz);
productos.push(pasta);
productos.push(new Producto("Aceite",30,650,new Fecha(18,07,2020)));
harina.saludar();
for (j=0;j<productos.length;j++){
    console.log("Precios de "+productos[j].nombre)
    console.log("Se vence el: "+productos[j].fechaVecn.dia+"/"+productos[j].fechaVecn.mes+"/"+productos[j].fechaVecn.año)
    for (i=0;i<productos[j].precios.length;i++){
        console.log(productos[j].precios[i]+" Bs.")
    }
}
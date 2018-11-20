var producto={
    nombre      :"Harina",
    existencia  :"0",
    precio      :250,
    excento     : false,
    moneda      :"Bs",
    aumentar    :function(){
        this.precio*=1.2; //aumenta 20%
    },
    mostrar     :function(){
        console.log("El Precio es "+this.precio+" "+this.moneda)
    },
}
producto.tipo="Amarilla"
console.log("La "+producto.nombre+" Cuesta "+producto.precio);
console.log(producto.tipo+" "+producto.marca);
producto.mostrar();
producto.aumentar();
producto.mostrar();
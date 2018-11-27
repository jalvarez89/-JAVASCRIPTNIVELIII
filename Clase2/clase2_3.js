imagenes=["Chrysanthemum.jpg","Desert.jpg","Hydrangeas.jpg","Jellyfish.jpg","Koala.jpg","Lighthouse.jpg","Penguins.jpg","Tulips.jpg"]
window.setInterval(function(){
    let n=(Math.random()*(imagenes.length-1)).toFixed(0);
    $("section img").attr({
        "src":"img/"+imagenes[n],
        "alt":imagenes[n],
        "title":imagenes[n]
    });
    $("h2").text(imagenes[n]);
},2000)
$("#1").on("click",function(){
    //se Agrega al Final de los P
    $("p").append($("#buscar").val().toUpperCase());
    //Se cambia el text
    $("h2").text($("#buscar").val());
    //Se Vacia el Input
    $("#buscar").val("");
    
})
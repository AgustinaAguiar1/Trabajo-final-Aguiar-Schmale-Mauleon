const imagen = ["../imagenes/leche.jpg", "../imagenes/manteca.jpg", "../imagenes/papelhigienico.jpg", "../imagenes/mayonesa.png", "../imagenes/quesountable.png", "../imagenes/cindor.png", "../imagenes/dentifrico.png", "../imagenes/yerba.png", "../imagenes/cafe.png", "../imagenes/sal.png", "../imagenes/hamburguesa.png", "../imagenes/panlactal.png"];
const productos=["Leche proteica 'La Serenisima' ","Manteca 'La Serenisima'","Papel Higienico 'Higienol'","Mayonesa 'Natura'", "Queso untable 'La Serenisima'", "Chocolatada 'Cindor'", "Pasta dental 'Colgate'", "Yerba Union 'Clasica'", "Cafe 'Dolca'", "Sal 'Dos Anclas'", "Hamburguesa x4 'Paty'", "Pan Lactal"];
const precios=[1000,850,2200,1200,1700,1000,1300,4000,3000,1200,3500,2000];
const stock= [100, 50, 200, 150, 500, 100, 400, 300, 150, 50, 8, 120];

let totalCompra=0;    

let entradas = document.querySelectorAll("div input");

function cargarArticulos(){
    let contador=0; 
    let articulos=document.querySelectorAll("#contproducto p, #contproducto img");
    for (let index = 0; index < articulos.length; index++) {
        articulos[index].src="img/"+imagen[contador];
        articulos[index+1].innerText=productos[contador];
        articulos[index+2].innerText="$ "+precios[contador];
        articulos[index+3].innerText="Stock de: "+stock[contador]+" unidades";
        index+=3;
        contador++;
    }
}

function verificarStock(){
    let unidadesCompradas=0; 
    let stockOk=true;  
    let contador=0; 
    entradas.forEach(input => {
        let cantidad=Number(input.value);
        if(stock[contador]>=cantidad) {
            unidadesCompradas+=Number(input.value);
        } else {
            alert("Stock insuficiente de "+productos[contador]);
            stockOk= false;                 
        }    
        contador++;
    })
    if (unidadesCompradas==0){
        stockOk= false; 
    }
    return stockOk;
}

function comprar(cantidad,i){
    totalCompra=totalCompra+cantidad*precios[i];
    stock[i]=stock[i]-cantidad;
}

function mostrarCompra(){
    document.getElementById("sumatotal").innerText="TOTAL A PAGAR $ "+totalCompra;
    document.querySelector("#total").disabled=true;
    alert("!Gracias por su compra!. Total a pagar $ "+totalCompra);
    contador=0;
    let articulos=document.querySelectorAll("#contproducto p, #contproducto img");
    
    for (let index = 0; index < articulos.length; index++) {
        articulos[index+3].innerText="Stock de: "+stock[contador]+" unidades";
        contador++;
        index+=3; 
    }
}

cargarArticulos();

document.querySelector("#total").addEventListener("click",()=>{
    
    if (verificarStock()) {
        let contador=0;
        entradas.forEach(input => {
            let cantidad=Number(input.value);
            comprar(cantidad, contador);
            contador++;
        })
        mostrarCompra();
    } else {
        alert("Revise la compra");
        sumar=true;
    }
})

document.querySelector("#borrar").addEventListener("click",()=>{
     document.querySelector("#total").disabled=false;
     totalCompra=0;         
     document.getElementById("sumatotal").innerText="TOTAL A PAGAR $ "+totalCompra;
     document.querySelectorAll("div input").forEach(input => {
        input.value=0;
     })
})
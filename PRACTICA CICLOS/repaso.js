/*//ciclo for 
//paso1 empieza,       paso2 final ciclo,        paso3 intervalos 
for( var x = 1; x<=30; x++){
   document.write("el valor es "+x+"<br>")
}



//ciclo while 
//paso 1
var y = 1;
//paso 2
while( y <= 30){
    document.write("el valor es"+y+"<br>")
//paso3
y++
}*/

//punto 2
/*
var pregunta = prompt("Deseas parar el ciclo");
var guardar = "";

//paso 1      //paso 2           //paso 3
for( var x= 1; pregunta !="si"; x++){
  //volver a digitar otro numero 
  numero = parseInt(prompt("Digite un numero"));
  //guardar los numeros digtados
  guardar=guardar + numero +",";
  //volver apreguntar
  pregunta = prompt("Deseas parar el ciclo");
}
//Mostrar los numeros digitados
document.write("los numeros son:"+guardar);*/
//while
/*
var x = 1
var pregunta = prompt("Deseas parar el ciclo");
var guardar = "";
while(pregunta !="si"){
    numero = parseInt(prompt("Digite un numero"))
    guardar=guardar + numero + ",";
    pregunta = prompt("Deseas parar el ciclo")
}
document.write("los numeros son:" +guardar);
*/
var y = 1;
while( y <= 30){
    document.write("el valor es"+y+"<br>")
y++
}


//Funcion registrar estudiante
document.getElementById("registrar").addEventListener("click",registrar);
var estudiantes =[];

function registrar(){

    var codigo=document.getElementById("codigo").value;
    var nombre=document.getElementById("nombre").value;
    var nota=document.getElementById("nota").value;

    if(codigo !="" && nombre !="" && nota !==""){
        var estudiante={"codigo":codigo, "nombre":nombre, "nota":nota};

        estudiantes.push(estudiante);

        alert(nombre+" se registro exitosamente!!!");

        var tabla = document.getElementById("tabla"); 
        var i;
        var filaFinal;
        var fila;
        
        filaFinal = tabla.rows.length; 
        fila = tabla.insertRow(filaFinal); 
        
        var celda0 = fila.insertCell(0);
        var celda1 = fila.insertCell(1);
        var celda2 = fila.insertCell(2);
        
        celda0.innerHTML = codigo;
        celda1.innerHTML = nombre;
        celda2.innerHTML = nota;
        
        document.getElementById("codigo").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("nota").value = "";
    }else{
        alert("No a ingresado todos los datos solicitados");
    }
}
//Funcion mostrar promedio
document.getElementById("promedio").addEventListener("click",mostrarPromedio);

function mostrarPromedio(){
    var i;
    var out=0;

    for (i=0; i < estudiantes.length;i++){
        out +=parseInt(estudiantes[i].nota);
    }
    var numEstud= estudiantes.length;
    out = out / numEstud;

    alert("El promedio es de: " +out);
}

//Funcion mostrar nota mas alta
document.getElementById("notaMayor").addEventListener("click", mayor);

function mayor() {  

  var i;
  var n = estudiantes[0].nota;  
  var max = 0;
    for (i = 0; i < estudiantes.length; i++) {
      if(estudiantes[i].nota > n){ 
        n = estudiantes[i].nota;
        max = i; 
      }
    }
    alert("El estudiante con la nota mas alta es "+ estudiantes[max].nombre);

}

//Funcion mostrar nota mas baja
document.getElementById("notaMenor").addEventListener("click", menor);

function menor(){

  var i;
  var n = estudiantes[0].nota;  
  var min = 0;
    for (i = 0; i < estudiantes.length; i++) {
      if(estudiantes[i].nota < n){ 
        n = estudiantes[i].nota;
      min = i; 
      }
    }
    alert("El estudiante con la nota mas baja es "+ estudiantes[min].nombre);

}

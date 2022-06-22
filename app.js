// Funciones
function precioCuotas(valor, numCuotas){
  resultado = Math.round(valor / numCuotas)
  return resultado
}

function continuar(){
  let continua = +prompt("Desea consultar otro producto ? 1- SI / 2-NO")
  if(continua == 2){
      contador++
      alert("Hasta luego");
  }
  else{
      alert("Espere un segundo que lo llevamos al inicio");
  }
}

//Fuciones nuevas
class Electrodomesticos{
  constructor(nombre, precio, interes){
      this.nombre = nombre;
      this.precio = parseFloat(precio);
      this.interes = interes
  }
}

function buscarElectro(electro, nombreElec){
  return electro.find(element => element.nombre === nombreElec.toUpperCase())
}


//Creaciones de objetos para ingresar en el array vacio
const electros = [];
electros.push(new Electrodomesticos("HELADERA", 68000, true))
electros.push(new Electrodomesticos("CAFETERA", 3400, false));
electros.push(new Electrodomesticos("TV", 78999.99, true));
electros.push(new Electrodomesticos("PC", 249999.99, true));
electros.push(new Electrodomesticos("CELULAR", 57000, false));
console.log(electros)



//*DOM
// creamos un for con un createElement para que se impriman todos los productos
for (const electro of electros){
  let contenedor = document.createElement("List")
  contenedor.innerHTML = `<h3> Producto: ${electro.nombre} </h3>
                          <p>Precio: $${electro.precio}</p>`
  document.body.appendChild(contenedor)
}


//Contador para frenar el ciclo
let contador = 0
do{
//* un if para buscar el producto en array
  let busqueda = buscarElectro(electros,prompt("Ingrese el nombre del producto que busca"))
  if (busqueda != undefined){
    alert(`Producto: ${busqueda.nombre} con un precio de $${busqueda.precio}`) 
    let cuotas =  +prompt("Ingrese el numero de cuotas. (Ej: 3,6,9,12)")
    switch (cuotas) {
    case 3:
        alert(`En ${cuotas} cuotas deberia pagar: $${precioCuotas(busqueda.precio, cuotas)} por mes`)
        continuar()
        break;
    case 6:
        alert(`En ${cuotas} cuotas deberia pagar: $${precioCuotas(busqueda.precio, cuotas)} por mes`)
        continuar()
        break;
    case 9:
        alert(`En ${cuotas} cuotas deberia pagar: $${precioCuotas(busqueda.precio, cuotas)} por mes`)
        continuar()
        break;
    case 12:
        alert(`En ${cuotas} cuotas deberia pagar: $${precioCuotas(busqueda.precio, cuotas)} por mes`)
        continuar()
        break;    
    default:
        alert("Ingreso un numero de cuotas incorrecto")
        break;
}
  }else {
     alert("No contamos con ese producto")
    }
}
while(contador != 1)
//props = {
//  'name': 'juan',
//  'id' : 12
//}






// creamos un componente
//export default function Saludar(props) {
//  return (
//    <p className="text-red-600 font-bold text-6xl hover:text-yellow-500">Hola soy un componente {props.nombre}, tienes {props.años} años</p>
//  ) 
//
//}


//creamo un componente aplicando destrucuturacion 

export default function Saludar({ name, edad }) {
  return (
    <p className="text-red-600 font-bold text-6xl hover:text-yellow-500">Hola soy un componente {name}, tienes {edad} años</p>
  )
} 
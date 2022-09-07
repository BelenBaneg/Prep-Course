// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  /*let Usuario = {
    nombre,
    email,
    password,
    saludar : ()=>`Hola, mi nombre es ${nombre}`
  }

  return Usuario*/

  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
    //sino poner saludar directo
    // this.saludar = function (){
    //   return 'Hola, mi nombre es ' + this.nombre;
    // }
  }

  Usuario.prototype.saludar = function() {
    return 'Hola, mi nombre es ' + this.nombre;
  };

  return Usuario;

  /*CON es6

  class Usuario{
     constructor (opciones){
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;}
  }

  saludar = function(){
    return 'Hola, mi nombre es ' + this.nombre;
  }
   */

}


function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function() {
    return 'Hello World!';
  };

}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function() {
    //primero metodo string prototype metodo reverse
    var stringInvertida = '';
    //crear una var para agregar la str invertida
    for(var i = this.length - 1; i>=0; i--) {
      //va hacia la ultima letra y lo va a ir guardando de atras hacia adelnte por eso comienza en -1, e i-- va restando.
      //una for rara para la this
      stringInvertida = stringInvertida + this.charAt(i);

      // el del video cambia esta ultima y la simplifica
      // stringInvertida += this[i]
    }
    return stringInvertida;
  };

  //otra manera
//split genera un array donde separa el string.
//reverso, y lo vuelvo a juntar en un string con join
//return this.split("").reverse().join("");
}


//otra manera
//split genera un array donde separa el string.
//reverso, y lo vuelvo a juntar en un string con join
return this.split("").reverse().join("");


// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  /*class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      nombre, 
      apellido,
      edad,
      domicilio
    }*/
//el this lo que hace es evitar conflictos con variables dentro del objeto, y hace directa referencia a la clase Persona, para decirle a la clase que el nombre le pertenece. this de persona es ella misma
    class Persona {
      constructor(nombre, apellido, edad, domicilio) {
        // Tu código:
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.domicilio = domicilio
        this.detalle = function() {
          return { 
            Nombre: this.nombre,
            Apellido: this.apellido,
            Edad: this.edad,
            Domicilio: this.domicilio
          }
          //ellos lo ponen a detalles por fuera
          // detalle(){
          //   return{ 
          //     Nombre: this.nombre,
          //     Apellido: this.apellido,
          //     Edad: this.edad,
          //     Domicilio: this.domicilio
          //   }
          // }
        }
      }
    }



function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
 const persona = new Persona(nombre, apellido, edad, dir);
//cuando creamos un obj nuevo entra el metodo new
  return persona


  //o return new Persona(nombre, apellido, edad, dir)
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  // LO QUE HICE ANTES
  // Persona.datos = function (nombre, edad) {
  //   return `${nombre}, ${edad} años``
  // }
  Persona.prototype.datos = function() {
    return `${this.nombre}, ${this.edad}  años`
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};

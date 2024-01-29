//Lo aprendido en el curso 

// Usando var
var myVariable = "Hello, World!";

// Usando let 
let myNumber = 42;

// Using const (para constantes que no deben ser reasignadas)
const PI = 3.14159;


//Arrays
let frutas = ["manzana", "banana", "naranja"];


//Constantes
const gravedad = 9.81;

//Fin declarando parte de lo aprendido en el curso, pasemos a la funcion!


function interactWithUser() {
    // Log un mensaje en la consola
    console.log("Bienvenido a una experiencia interactiva!");
  
    // Solicitar al usuario su nombre
    let userName = prompt("¿Cuál es tu nombre?");
  
    // Chequear si el usuario puso su nombre
    if (userName) {
      // Mostrar un saludo personalizado usando alert
      alert("Hola, " + userName + "! Bienvenido a nuestra página web.");
    } else {
      //Manejar el caso en el que el usuario no proporcionó un nombre usando console.warn
      console.warn("No se proporcionó un nombre. Lo llamaremos 'Anónimo'.");
      userName = "Anónimo";
    }
  
    // Utilice confirm para obtener la respuesta del usuario.
    let wantsToContinue = confirm("¿Querés seguir hablando?");
  
    // Utilice un while loop basado en la respuesta del usuario
    while (wantsToContinue) {
      // Solicitar al usuario la entrada de texto
      let userText = prompt("Escribí algo:");
  
      // Mostrar el texto del usuario usando alert
      alert("Pusiste: " + userText);
  
      // Pregunta si quiere seguir hablando
      wantsToContinue = confirm("¿Querés seguir hablando?");
    }
  
    // Mostrar un mensaje de despedida mediante alert
    alert("Adiós, " + userName + "! Un gusto hablar contigo!");
  }
  
  // Llame a la función para desencadenar la interacción.
  interactWithUser();
  
  
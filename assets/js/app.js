function convierteFahrenheit(){
  var convierte = parseInt(document.getElementById("celsius").value);
    if(isNaN(convierte)){
      alert("Introduce el valor que deseas convertir a Celsius");
    }else{
      var fahrenheit = 32 + 9 * convierte / 5;
      document.getElementById("fahrenheit").value = fahrenheit.toFixed(3);
    }

}

function convierteCelsius(){
  var convierte = parseInt(document.getElementById("fahrenheit").value);
    if(isNaN(convierte)){
      alert("Introduce el valor que deseas convertir a Fahrenheit");
    }else{
      var celsius = (convierte-32) * 5 / 9;
      document.getElementById("celsius").value = celsius.toFixed(3);
    }
}

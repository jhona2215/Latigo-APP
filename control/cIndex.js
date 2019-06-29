// El watch id referencia al actual 'watchAcceleration'
var watchID = null;
var vel2=0;
var audio = new Audio('../control/latigo-sheldon-latgazo-.mp3');
//document.body.style.backgroundImage = "url('../img/Diapositiva2.PNG')";
//document.style = "#background{background-image: url('../img/Diapositiva2.PNG');position:absolute; z-index:1; width:100%; height:100%;}";
document.getElementById("button").addEventListener("click", function(){
  startView();
});



   function startView(){
     // Importante el manejador de eventos para que cargue las librerías
     document.addEventListener("deviceready", onDeviceReady, false);

   }

   // Las APIs del dispositivo listas
   //
   function onDeviceReady() {
       startWatch();
   }

   // Empezar a ver la aceleracion
   //
   function startWatch() {
       // Actualizar la aceleracion cada 0.5s
       var options = { frequency: 500 };

       watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
   }

   // Detener la aceleracion
   //
   function stopView(){
       navigator.accelerometer.clearWatch(watchID);
       watchID = null;
   }

   // onSuccess: Captura la aceleracion actual
   //
   function onSuccess(acceleration) {
       var acel=0;
       acel= Math.abs(Math.sqrt(Math.pow(parseFloat(acceleration.x),2)+Math.pow(parseFloat(acceleration.y),2)+Math.pow(parseFloat(acceleration.z),2)));
       vel2= (acel*0.5);
       if(vel2 >= 9){
          //document.body.style.backgroundImage = " url('../img/Diapositiva1.jpg')";
          PlayAudio();
          //document.body.style.backgroundImage = " url('../img/Diapositiva2.jpg')";
       }
  }

   // onError: Al fallar el captor
   //
   function onError() { 
       alert("ERROR!");
   }

   function PlayAudio(){
    document.getElementById("audio").play();
    //document.body.style.backgroundImage = " url('../img/Diapositiva1.jpg')";
 }
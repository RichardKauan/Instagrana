 //função para câmera
  document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
    document.getElementById("cam").addEventListener 
   ("click", cameraTakePicture);
   function cameraTakePicture() { 
   navigator.camera.getPicture(onSuccess, onFail, {  
      quality: 100, 
      destinationType: Camera.DestinationType.DATA_URL,
      allowEdit: true,
   });  
   
   function onSuccess(imageData) { 
      var image = document.getElementById('myImage'); 
      image.src = "data:image/PNG;base64," + imageData; 
   }  
   
   function onFail(message) { 
      alert('Failed because: ' + message); 
   } 
}
}
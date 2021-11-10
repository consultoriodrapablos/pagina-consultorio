/*document.querySelector("#id-checkbox").addEventListener("click", function(event) {
    //document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
    console.log("Hola");
    event.preventDefault();
}, false);


document.querySelector("#myForm").addEventListener("onsubmit", function(event) {
    //document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
    console.log("onsubmit");
    event.preventDefault();
}, false);*/

window.addEventListener("load", function(event) {
    console.log("Cargando pagina!");
    //document.getElementById('email').value='pepe@gmail.com';
    document.getElementById("myform").reset();
  });

  window.addEventListener("submit", function(event) {
    //document.getElementById('name').value='submit';
    //console.log("submit!");
    //document.getElementById("myform").reset();
  });

  window.addEventListener("backbutton", function(event) {
    console.log("back de la pagina!");
    //document.getElementById("myform").reset();
  });

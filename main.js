function login() {
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if( user == "Jaret" && password == "12345"){
        window.location = "index.html";
    }else{
        alert("Datos Incorrectos")
    }
}
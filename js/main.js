var fecha=new Date();  
var anio=" - "+fecha.getUTCFullYear();  
document.getElementById('fechafoot').innerHTML=anio; 



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const verificacion = urlParams.get('enviado')

const NumeroTramite = document.getElementById("NumeroTramite");
NumeroTramite.textContent = Math.floor(Math.random() * 10001);

if (verificacion == "si"){
    const MensajeFormulario = document.getElementById("MensajeFormulario");
    MensajeFormulario.style.visibility = 'visible'
}

function validar() {

    const IdentificacionTipo = document.getElementById("IdentificacionTipo").value;
    const IdentificacionNumero = document.getElementById("IdentificacionNumero").value;
    const IdentificacionError = document.getElementById("IdentificacionError");
    IdentificacionError.textContent = "";

    const Nombre = document.getElementById("Nombre").value;
    const NombreError = document.getElementById("NombreError");
    NombreError.textContent = "";

    const Apellido = document.getElementById("Apellido").value;
    const ApellidoError = document.getElementById("ApellidoError");
    ApellidoError.textContent = "";

    const Email = document.getElementById("Email").value;
    const EmailError = document.getElementById("EmailError");
    EmailError.textContent = "";

    const Tele = document.getElementById("Tele").value;
    const TeleError = document.getElementById("TeleError");
    TeleError.textContent = "";

    const Planes = document.getElementById("Planes").value;
    const PlanesError = document.getElementById("PlanesError");
    PlanesError.textContent = "";   
    
    const Fecha = document.getElementById("Fecha").value;
    const FechaError = document.getElementById("FechaError");
    FechaError.textContent = ""; 

    const Provincia = document.getElementById("Provincia").value;
    const ProvinciaError = document.getElementById("ProvinciaError");
    ProvinciaError.textContent = "";  
    
    const Especialidad = document.getElementById("Especialidad").value;
    const EspecialidadError = document.getElementById("EspecialidadError");
    EspecialidadError.textContent = "";  

    const Prepaga = document.getElementById("Prepaga").value;
    const PrepagaError = document.getElementById("PrepagaError");
    PrepagaError.textContent = "";
 
    
    let esValido = true;

    if (IdentificacionTipo === "") {
        IdentificacionError.textContent = "Por favor seleccione su tipo de identificación.";
        esValido = false;
    }else if (IdentificacionNumero === "" || IdentificacionNumero.length < 7) {
        IdentificacionError.textContent = "Por favor ingrese un número de identificación valido.";
        esValido = false;
    }

    if (Nombre === "" || /\d/.test(Nombre) || Nombre.length <3 ) {
        NombreError.textContent = "Por favor ingrese un nombre valido.";
        esValido = false;
    }

    if (Apellido === "" || /\d/.test(Apellido) || Apellido.length <3) {
        ApellidoError.textContent = "Por favor ingrese un apellido valido.";
        esValido = false;
    }

    if (Email === "" || !Email.includes("@")) {
        EmailError.textContent ="Por favor ingrese un email valido.";
        esValido = false;
    }

    if (Tele === "") {
        TeleError.textContent = "Por favor seleccione su tipo de identificación.";
        esValido = false;
    }

    if (Prepaga === "" || Prepaga.length < 3) {
        PrepagaError.textContent = "Por favor ingrese un valor valido.";
        esValido = false;
    }

    if (Planes === ""){
        PlanesError.textContent = "Por favor ingrese un valor valido.";
        esValido = false;
    }

    if (Fecha === "") {
        FechaError.textContent = "Por favor seleccione una fecha valida.";
        esValido = false;
    }

    if (Provincia === "") {
        ProvinciaError.textContent = "Por favor seleccione una provincia valida.";
        esValido = false;
    }

    if (Especialidad === "") {
        EspecialidadError.textContent = "Por favor seleccione una especialidad valida.";
        esValido = false;
    }

    return esValido;
}

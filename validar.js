const form = document.querySelector("#btn-enviar");

form.addEventListener("click",(event)=>{
        event.preventDefault;
        const validity = validarInput();
        if (validity){
            alert("formulario enviado")
        }
})
function validarInput (){
    const inputRequerido =document.querySelectorAll("[data-required]");
    let enviar = true
    inputRequerido.forEach((input)=>{
        if (input.value ==""){
            input.parentElement.querySelector(".input-message-error").innerHTML = "El campo no puede estar vacio";
            enviar=false
        }else{
            input.parentElement.querySelector(".input-message-error").innerHTML = ""
        }
    })
    return enviar
}



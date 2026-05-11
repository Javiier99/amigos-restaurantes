// const confirmación = confirm("¿Eres el host?")
const buttonAdmin = document.querySelector(".button-admin");

buttonAdmin.addEventListener("click", ()=>{
    const contraseña = prompt("Introduce la contraseña").toLowerCase();
    console.log(contraseña);
    if(contraseña === "javier"){
        alert("Estás dentro")
        window.location = "/pages/admin.html";
    };

})


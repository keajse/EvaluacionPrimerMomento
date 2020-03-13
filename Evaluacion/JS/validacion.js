function validate()
{

    let name = document.getElementById('nombre').value;
    let lastname = document.getElementById('apellido').value;
    let birthday = document.getElementById('date').value;
    let email = document.getElementById('correo').value;
    let phone = document.getElementById('telefono').value;

    if(name === "")
    {
        alert("El campo de nombre es requerido");
        return false;
    }

    if(lastname === "")
    {
        alert("El campo de apellido es requerido");
        return false;
    }
    

    if(birthday === "")
    {
        alert("El campo fecha de nacimiento es requerido");
        return false;
    }

    if(email === "")
    {
        alert("El campo de correo es requerido");
        return false;
    }

    if(phone === "")
    {
        alert("El campo de telefono es requerido");
        return false;
    }

    if(isNaN(phone))
    {
       
        alert("El campo de telefono debe ser un número");
        return false;
    
    }

}
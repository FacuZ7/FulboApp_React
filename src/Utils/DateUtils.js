export const getEdadActual = (fechaNac) => {
    const hoy = new Date();
    //validar fecha para que llegue en formato ISO.
    const fechaNacimiento = new Date(fechaNac);

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth(); 

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--; //si el cumpleaños aun no pasó, restamos 1.
    }
    
    return edad;
}
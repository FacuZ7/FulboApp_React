const DateUtils =  {
    getEdadActual: (fechaNac) => {
        const hoy = new Date();
        //validar fecha para que llegue en formato ISO.
        const fechaNacimiento = new Date(fechaNac);

        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - fechaNacimiento.getMonth(); 

        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--; //si el cumpleaños aun no pasó, restamos 1.
        }
        
        return edad;
    },

    formatDate: (date, format = "dd/mm/yyyy") => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        
        //por ahora solo soporte para dd/mm/yyyy
        return `${day}/${month}/${year}`;
    }
}

export default DateUtils;
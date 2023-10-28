class Persona{
    /**
     *  Constructor de la clase Persona.
     * 
     *  @param {number} id - El ID de la Persona
     *  @param {string} nombre - El nombre de la Persona
     *  @param {number} apellido - El apellido de la Persona
     *  @param {number} edad - Edad de la Persona

    */
    constructor (id, nombre, apellido, edad){
        this.id = this.ValidarId(id);
        this.nombre = this.ValidarCadena(nombre);
        this.apellido = this.ValidarCadena(apellido);
        this.edad = this.ValidarNumeroPositivo(edad);
    }
    
    // Valida que id sea entero no nulo mayor a 0
    ValidarId(id){
        try{
            if(this.ValidarNumeroPositivo(id)){
                // otras validaciones de id
                return id;
            }
            else{ throw new Error("Error id no valido.");}
        }
        catch{
            throw new Error("Error id no valido.");
        }
    }

    // Valida que la cadena no nula ni vacia
    ValidarCadena(cadena){
        if (typeof cadena === 'string' && cadena.trim() !== '') {
            return cadena;
        } else {
            throw new Error("Erorr cadena no valida.");
        }
    }

    // Valida que un numero sea entero no nulo mayor a 0
    ValidarNumeroPositivo(numero){
        numero = parseInt(numero);
        console.log(numero);
        
        if (typeof numero === 'number' && numero > 0 && !isNaN(numero)) {
            return numero;
        } else {
            throw new Error("Error entero no valido.");
        }
    }
}
export default Persona; // Exporta la clase Persona

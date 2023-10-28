import Persona from "./Persona.js";

class Villano extends Persona{
    constructor (id, nombre, apellido, edad, enemigo, robos, asesinatos){
        super(id, nombre, apellido, edad);

        this.enemigo = super.ValidarCadena(enemigo);
        this.robos = super.ValidarNumeroPositivo(robos);
        this.asesinatos = super.ValidarNumeroPositivo(asesinatos);

    }
}
export default Villano;
import Persona from "./Persona.js";

class Heroe extends Persona{
    constructor (id, nombre, apellido, edad, alterEgo, ciudad, publicado){
        super(id, nombre, apellido, edad);

        this.alterEgo = super.ValidarCadena(alterEgo);
        this.ciudad = super.ValidarCadena(ciudad);
        this.publicado = super.ValidarNumeroPositivo(publicado);

    }
}
export default Heroe;
export class Ingredient {

    // agregando el modficador de acceso en el constructor 
    // le decimos a typescrypt que nos haga el 
    // this.name = name y el this.amount = amount,
    // ademas nos crea las propiedades.
    constructor (
        public name: string, 
        public amount: number
    ) {}
}
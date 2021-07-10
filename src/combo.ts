import { Producto } from "./producto"

export class Combo extends Producto {

    public listado: Array<{cantidad: number, item:Producto}>

    constructor() {
        super()
        this.listado = new Array<{cantidad: number, item:Producto}>()
    }
}
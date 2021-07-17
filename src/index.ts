import { Producto } from "./producto";

export { Pedido } from "./pedido"
export { Producto } from "./producto"
export { Combo } from "./combo"

interface item {
    precio: number
    cantidad: number
}

export enum ErrorLevel {
    WARN = -2, 
    ERROR,
    OK,
}

export function calculoComplejo( itemArray: Array<item>, freePutridFruit = false  ): number | ErrorLevel {
    let sum = 0;
    for(const a of itemArray){
        if (a.precio < 0 || a.cantidad <= 0) return ErrorLevel.ERROR;
        if (a.precio == 0 && !freePutridFruit) return ErrorLevel.WARN;
        sum +=  (a.precio * a.cantidad);
    }

    return sum;
}

export function calculoEspecialCombo( itemArray: Array<{cantidad: number, item:Producto}> ): number | ErrorLevel {
    let sum = 0;
    for(const a of itemArray){
        if (a.item.precio < 0 || a.cantidad <= 0) return ErrorLevel.ERROR;
        sum += (a.item.precio * a.cantidad);
    }

    return sum;
}
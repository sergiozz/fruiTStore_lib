export { Pedido } from "./pedido"
export { Producto } from "./producto"

interface item {
    precio: number
    cantidad: number
}
  
export function calculoComplejo( itemArray: Array<item> ): number {
    let sum = 0;
    itemArray.forEach(a => sum += (a.precio * a.cantidad));

    return sum;
}
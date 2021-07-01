export class Pedido {

    public id: number;
    public precio: number;
    public us_telegram: string;
    public direccion: string;
    public estado: string;

    constructor() {
        this.id = 0;
        this.precio = 0;
        this.us_telegram = "-";
        this.direccion = "-";
        this.estado = "-";
    }
}
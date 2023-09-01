export interface Transaccion{
    idtransaccion:number,
    monto:number,
    fecha:string,
    idorigen?:number,
    tipo:string,
    descripcion:string
}
export interface TransaccionRequest{
    monto: number,
    fecha: string,
    idorigen?:number,
    idtipo: number,
    descripcion: string
}
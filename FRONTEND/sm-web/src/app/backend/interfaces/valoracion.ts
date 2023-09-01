export interface Valoracion{
    idvaloracion:number,
    usuario:string,
    nombres:string,
    valoracion:number,
    opinion:string,
    fecha:string,
    clasificacion?:string,
    idpedido:number
}
export interface ValoracionRequest{
    usuario:string,
    nombres:string,
    valoracion:number,
    opinion: string;
    clasificacion:string,
    idpedidoin:number
}
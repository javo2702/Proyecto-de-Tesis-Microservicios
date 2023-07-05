export interface Producto{
    idproducto:number,
    nombre:string,
    descripcion:string|any,
    precio:number,
    estado:string,
    descuento:number;
    imagen:string,
    //categoria_idcategoria:number|any,
    categoria:string
}
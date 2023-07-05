export interface PedidoRequest{
    fecha_pedido?:string | null,
    monto_pedido?:number | null,
    estado_pedido?:string | null,
    idmozo_pedido?:number | null,
    idmesa_pedido?:number | null,
    detalles_pedido?:DetallesPedidoRequest[] | null,
}
export interface DetallesPedidoRequest{
    idproducto_detalles: number,
    cantidad_detalles: number
}
export interface PedidoResponse{
    idpedido: number,
    fecha: string,
    monto: number,
    estado: string,
    idcliente?: number | null,
    idmozo: number,
    idcomprobante?: number | null,
    idmesa: number
    numero:number|null,
    estado_mes?:string|null,
    detalles?: DetallesPedidoResponse[] | null
}
export interface DetallesPedidoResponse{
    iddetalles_pedido: number,
    idproducto: number,
    cantidad: number
}
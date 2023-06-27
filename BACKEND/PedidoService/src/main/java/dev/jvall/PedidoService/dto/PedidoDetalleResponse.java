package dev.jvall.PedidoService.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PedidoDetalleResponse {
    private int iddetalles_pedido;
    private int idproducto;
    private int cantidad;
}

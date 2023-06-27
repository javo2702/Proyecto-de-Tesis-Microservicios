package dev.jvall.PedidoService.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PedidoDetalleRequest {
    //private int idpedido_detalles;
    private int idproducto_detalles;
    private int cantidad_detalles;
}

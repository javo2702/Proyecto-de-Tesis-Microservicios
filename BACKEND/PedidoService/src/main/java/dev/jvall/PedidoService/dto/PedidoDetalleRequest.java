package dev.jvall.PedidoService.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PedidoDetalleRequest {
    //private int idpedido_detalles;
    @Nullable
    private Integer idproducto_detalles;
    @Nullable
    private Integer cantidad_detalles;
}

package dev.jvall.PedidoService.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PedidoRequest {
    @Nullable
    private String fecha_pedido;
    @Nullable
    private Double monto_pedido;
    @Nullable
    private String estado_pedido;
    @Nullable
    private Integer idmozo_pedido;
    @Nullable
    private Integer idbill_pedido;
    @Nullable
    private Integer idcliente_pedido;
    @Nullable
    private Integer idmesa_pedido;
    @Nullable
    private List<PedidoDetalleRequest> detalles_pedido;
}

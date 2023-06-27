package dev.jvall.PedidoService.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PedidoRequest {
    private String fecha_pedido;
    private double monto_pedido;
    private String estado_pedido;
    private int idmozo_pedido;
    private int idmesa_pedido;
    private List<PedidoDetalleRequest> detalles_pedido;
}

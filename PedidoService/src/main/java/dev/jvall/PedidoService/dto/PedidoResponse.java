package dev.jvall.PedidoService.dto;

import dev.jvall.PedidoService.model.PedidoDetalle;
import jakarta.annotation.Nullable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
public class PedidoResponse {
    private int idpedido;
    private String fecha;
    private double monto;
    private String estado;
    @Nullable
    private Integer idcliente;
    private int idmozo;
    @Nullable
    private Integer idcomprobante;
    private int idmesa;
    private int numero;
    private String estado_mes;
    private List<PedidoDetalle> detalles;
}

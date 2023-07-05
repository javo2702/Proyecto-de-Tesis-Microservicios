package dev.jvall.PedidoService.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="pedido")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Pedido implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
}

package dev.jvall.PedidoService.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@Table(name="detalles_pedido")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@IdClass(RelationshipPedidoId.class)
public class PedidoDetalle implements Serializable {
    @Id
    private int iddetalles_pedido;
    @Id
    private int idproducto;
    private int cantidad;
}

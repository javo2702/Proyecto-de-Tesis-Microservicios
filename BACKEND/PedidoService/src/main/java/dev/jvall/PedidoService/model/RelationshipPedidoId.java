package dev.jvall.PedidoService.model;

import jakarta.persistence.IdClass;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RelationshipPedidoId implements Serializable {
    private int iddetalles_pedido;
    private int idproducto;
}

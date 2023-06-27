package dev.jvall.PedidoService.repository;

import dev.jvall.PedidoService.model.PedidoDetalle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PedidoDetallesRepository extends JpaRepository<PedidoDetalle,Integer> {
    @Query(value = "{call show_order_details(:idpedido_show)};", nativeQuery = true)
    List<PedidoDetalle> showOrderDetails(
            @Param("idpedido_show")int idpedido_show
    );
    @Query(value = "{call save_order_details(:idpedido_detalles,:idproducto_detalles,:cantidad_detalles)};", nativeQuery = true)
    PedidoDetalle saveOrderDetail(
            @Param("idpedido_detalles")int idpedido_detalles,
            @Param("idproducto_detalles")int idproducto_detalles,
            @Param("cantidad_detalles")int cantidad_detalles
    );

}

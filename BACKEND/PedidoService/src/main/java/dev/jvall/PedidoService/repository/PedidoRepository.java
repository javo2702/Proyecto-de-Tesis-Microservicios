package dev.jvall.PedidoService.repository;

import dev.jvall.PedidoService.dto.PedidoDetalleRequest;
import dev.jvall.PedidoService.dto.PedidoDetalleResponse;
import dev.jvall.PedidoService.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PedidoRepository extends JpaRepository<Pedido,Integer> {
    @Query(value = "{call list_orders(:fecha_)};", nativeQuery = true)
    List<Pedido> getOrderList(
            @Param("fecha_") String fecha_
    );
    @Query(value = "{call save_order(:fecha_pedido,:monto_pedido,:estado_pedido,:idmozo_pedido,:idmesa_pedido)};", nativeQuery = true)
    Pedido saveOrder(
            @Param("fecha_pedido")String fecha_pedido,
            @Param("monto_pedido")double monto_pedido,
            @Param("estado_pedido")String estado_pedido,
            @Param("idmozo_pedido")int idmozo_pedido,
            @Param("idmesa_pedido")int idmesa_pedido
    );
    @Query(value = "{call set_order_bill(:idpedido_bill,:idcomprobante_bill)};", nativeQuery = true)
    Pedido setOrderBill(
            @Param("idpedido_bill")int idpedido_bill,
            @Param("idcomprobante_bill")int idcomprobante_bill
    );
    @Query(value = "{call show_order(:idpedido_show)};", nativeQuery = true)
    Pedido showOrder(
            @Param("idpedido_show")int idpedido_show
    );
    @Query(value = "{call set_order_client(:idpedido_cliente,:idcliente_cliente)};", nativeQuery = true)
    Pedido setOrderClient(
            @Param("idpedido_cliente")int idpedido_cliente,
            @Param("idcliente_cliente")int idcliente_cliente
    );

    @Query(value = "{call change_order_state(:id_pedido,:nuevo_estado,:fecha)};", nativeQuery = true)
    List<Pedido> changeOrderStateList(
            @Param("id_pedido")int id_pedido,
            @Param("nuevo_estado")String nuevo_estado,
            @Param("fecha")String fecha
    );
    @Query(value = "{call delete_order(:id_pedido,:id_mesa,:fecha)};", nativeQuery = true)
    List<Pedido> deleteOrder(
            @Param("id_pedido")int id_pedido,
            @Param("id_mesa")int id_mesa,
            @Param("fecha")String fecha
    );
}

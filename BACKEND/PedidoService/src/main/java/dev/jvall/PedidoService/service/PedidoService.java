package dev.jvall.PedidoService.service;

import dev.jvall.PedidoService.dto.PedidoDetalleRequest;
import dev.jvall.PedidoService.dto.PedidoDetalleResponse;
import dev.jvall.PedidoService.model.Pedido;
import dev.jvall.PedidoService.model.PedidoDetalle;
import dev.jvall.PedidoService.repository.PedidoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j //borrar depues
public class PedidoService {
    private final PedidoRepository pedidoRepository;
    public List<Pedido> getOrderList(String fecha){
        log.info("Getting order list from db");
        return pedidoRepository.getOrderList(fecha);
    }
    public List<Pedido> changeOrderStateList(int orderid,String state,String fecha){
        return pedidoRepository.changeOrderStateList(orderid,state,fecha);
    }
    public Pedido saveOrder(String fecha, double monto, String estado, int idmozo, int idmesa){
        return pedidoRepository.saveOrder(fecha,monto,estado,idmozo,idmesa);
    }
    public Pedido setOrderBill(int idpedido,int idcomprobante){

        return pedidoRepository.setOrderBill(idpedido,idcomprobante);
    }
    public Pedido showOrder(int idpedido){
        return pedidoRepository.showOrder(idpedido);
    }
    public Pedido showOrderTable(int idtable){
        return pedidoRepository.showOrderTable(idtable);
    }
    public Pedido endOrderState(int idpedido){
        return pedidoRepository.endOrderState(idpedido);
    }
    public Pedido setOrderClient(int idpedido, int idcliente){
        return pedidoRepository.setOrderClient(idpedido,idcliente);
    }
    public List<Pedido> deleteOrder(int orderid,int tableid,String fecha){
        return pedidoRepository.deleteOrder(orderid,tableid,fecha);
    }
}

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
    public List<Pedido> getOrderList(){
        log.info("Getting order list from db");
        return pedidoRepository.getOrderList();
    }
    public Pedido saveOrder(String fecha, double monto, String estado, int idmozo, int idmesa){
        return pedidoRepository.saveOrder(fecha,monto,estado,idmozo,idmesa);
    }
    public void setOrderBill(int idpedido,int idcomprobante){

        pedidoRepository.setOrderBill(idpedido,idcomprobante);
    }
    public Pedido showOrder(int idpedido){
        return pedidoRepository.showOrder(idpedido);
    }
    public void setOrderClient(int idpedido, int idcliente){
        pedidoRepository.setOrderClient(idpedido,idcliente);
    }
}

package dev.jvall.PedidoService.service;

import dev.jvall.PedidoService.dto.PedidoDetalleResponse;
import dev.jvall.PedidoService.model.Pedido;
import dev.jvall.PedidoService.model.PedidoDetalle;
import dev.jvall.PedidoService.repository.PedidoDetallesRepository;
import dev.jvall.PedidoService.repository.PedidoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j //borrar depues
public class PedidoDetalleService {
    private final PedidoDetallesRepository pedidoDetallesRepository;
    public List<PedidoDetalle> showOrderDetails(int idpedido){
        return pedidoDetallesRepository.showOrderDetails(idpedido);
    }
    public PedidoDetalle saveOrderDetail(int idpedido, int idproducto, int cantidad){
        return pedidoDetallesRepository.saveOrderDetail(idpedido,idproducto,cantidad);
    }
}

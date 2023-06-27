package dev.jvall.PedidoService.controller;

import dev.jvall.PedidoService.dto.PedidoDetalleRequest;
import dev.jvall.PedidoService.dto.PedidoDetalleResponse;
import dev.jvall.PedidoService.dto.PedidoRequest;
import dev.jvall.PedidoService.dto.PedidoResponse;
import dev.jvall.PedidoService.model.Mesa;
import dev.jvall.PedidoService.model.Pedido;
import dev.jvall.PedidoService.model.PedidoDetalle;
import dev.jvall.PedidoService.service.MesaService;
import dev.jvall.PedidoService.service.PedidoDetalleService;
import dev.jvall.PedidoService.service.PedidoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
public class PedidoRestController {
    @Value("${server.port}")
    private String port;

    private final PedidoService pedidoService;
    private final PedidoDetalleService pedidoDetalleService;
    private final MesaService mesaService;

    @GetMapping("/server/info")
    public ResponseEntity<String> showOrderInfo(){
        return ResponseEntity.ok("DESDE EL SERVICIO DE PEDIDO, EL PUERTO QUE UTILIZA ES: "+port);
    }
    @GetMapping("/orderlist")
    public ResponseEntity<List<Pedido>> getOrderList(){
        try{
            List<Pedido> orderlist = pedidoService.getOrderList();
            return new ResponseEntity<>(orderlist, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/orderlist/{orderid}/detalles")
    public ResponseEntity<PedidoResponse> getOrderDetail(@PathVariable int orderid){
        try{
            Pedido order = pedidoService.showOrder(orderid);
            List<PedidoDetalle> detallesOrder = pedidoDetalleService.showOrderDetails(order.getIdpedido());
            Mesa orderTable = mesaService.getTableDetails(order.getIdmesa());
            PedidoResponse pedResp = new PedidoResponse(
                    order.getIdpedido(),
                    order.getFecha(),
                    order.getMonto(),
                    order.getEstado(),
                    order.getIdcliente(),
                    order.getIdmozo(),
                    order.getIdcomprobante(),
                    order.getIdmesa(),
                    orderTable.getNumero(),
                    orderTable.getEstado(),
                    detallesOrder
            );
            return new ResponseEntity<>(pedResp, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/orderlist/save")
    public ResponseEntity<Pedido> saveOrder(@RequestBody PedidoRequest pedido){
        try{
            Pedido ordersaved = pedidoService.saveOrder(pedido.getFecha_pedido(),pedido.getMonto_pedido(),pedido.getEstado_pedido(),pedido.getIdmozo_pedido(),pedido.getIdmesa_pedido());
            mesaService.changeTableState(pedido.getIdmesa_pedido());
            for(PedidoDetalleRequest dt:pedido.getDetalles_pedido()){
                pedidoDetalleService.saveOrderDetail(ordersaved.getIdpedido(),dt.getIdproducto_detalles(),dt.getCantidad_detalles());
            }
            return new ResponseEntity<>(ordersaved, HttpStatus.OK);
        } catch (Exception e){
            //borrar detalles y pedido
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/orderlist/table/{idtable}/restore-state")
    public ResponseEntity<List<Mesa>> restoreTableState(@PathVariable int idtable){
        try{
            List<Mesa> tableListRestore = mesaService.restoreTableState(idtable);
            return new ResponseEntity<>(tableListRestore,HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

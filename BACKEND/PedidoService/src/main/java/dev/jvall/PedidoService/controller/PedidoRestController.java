package dev.jvall.PedidoService.controller;

import dev.jvall.PedidoService.dto.*;
import dev.jvall.PedidoService.model.Mesa;
import dev.jvall.PedidoService.model.Pedido;
import dev.jvall.PedidoService.model.PedidoDetalle;
import dev.jvall.PedidoService.service.MesaService;
import dev.jvall.PedidoService.service.NotificationService;
import dev.jvall.PedidoService.service.PedidoDetalleService;
import dev.jvall.PedidoService.service.PedidoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
public class PedidoRestController {
    @Value("${server.port}")
    private String port;

    @Autowired
    private final SSEController sseController;

    private final PedidoService pedidoService;
    private final PedidoDetalleService pedidoDetalleService;
    private final MesaService mesaService;

    @GetMapping("/server/info")
    public ResponseEntity<String> showOrderInfo(){
        return ResponseEntity.ok("DESDE EL SERVICIO DE PEDIDO, EL PUERTO QUE UTILIZA ES: "+port);
    }
    @GetMapping("/orderlist")
    public ResponseEntity<List<Pedido>> getOrderList(@RequestParam String fecha){
        try{
            List<Pedido> orderlist = pedidoService.getOrderList("%"+fecha+"%");
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
                    order.getIdpedido(), order.getFecha(), order.getMonto(), order.getEstado(),
                    order.getIdcliente(), order.getIdmozo(), order.getIdcomprobante(), order.getIdmesa(),
                    orderTable.getNumero(), orderTable.getEstado(), detallesOrder
            );
            return new ResponseEntity<>(pedResp, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/orderlist/{tableid}/detalles/table")
    public ResponseEntity<PedidoResponse> getOrderDetailTable(@PathVariable int tableid){
        try{
            Pedido order = pedidoService.showOrderTable(tableid);
            List<PedidoDetalle> detallesOrder = pedidoDetalleService.showOrderDetails(order.getIdpedido());
            Mesa orderTable = mesaService.getTableDetails(order.getIdmesa());
            PedidoResponse pedResp = new PedidoResponse(
                    order.getIdpedido(), order.getFecha(), order.getMonto(), order.getEstado(),
                    order.getIdcliente(), order.getIdmozo(), order.getIdcomprobante(), order.getIdmesa(),
                    orderTable.getNumero(), orderTable.getEstado(), detallesOrder
            );
            return new ResponseEntity<>(pedResp, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/orderlist/order/{orderid}/detalles/update")
    public ResponseEntity<PedidoResponse> updateOrderDetail(@PathVariable int orderid,@RequestBody List<PedidoDetalleRequest> detalles){
        try{
            List<PedidoDetalle> updatedOrderDetails = new ArrayList<>();
            for(PedidoDetalleRequest d : detalles){
                updatedOrderDetails = pedidoDetalleService.updateOrderDetails(orderid,d.getIdproducto_detalles(),d.getCantidad_detalles());
            }
            Pedido orderUpdated = pedidoService.showOrder(orderid);
            Mesa orderTable = mesaService.getTableDetails(orderUpdated.getIdmesa());
            PedidoResponse pedResp = new PedidoResponse(
                    orderUpdated.getIdpedido(), orderUpdated.getFecha(), orderUpdated.getMonto(), orderUpdated.getEstado(),
                    orderUpdated.getIdcliente(), orderUpdated.getIdmozo(), orderUpdated.getIdcomprobante(), orderUpdated.getIdmesa(),
                    orderTable.getNumero(), orderTable.getEstado(), updatedOrderDetails
            );
            return new ResponseEntity<>(pedResp, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/orderlist/order/{orderid}/end-state")
    public ResponseEntity<Response> endOrderState(@PathVariable int orderid){
        try{
            Pedido orderUpdated = pedidoService.endOrderState(orderid);
            sseController.sendNotificationOrder("Se ha pagado el pedido "+orderid);
            sseController.sendNotificationAdmin("Se ha pagado el pedido "+orderid);
            sseController.sendNotificationCashier("Se ha pagado el pedido "+orderid);
            return new ResponseEntity<>(new Response("Estado del pedido "+orderid+": Pagado"), HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/orderlist/order/{orderid}/detalles/delete")
    public ResponseEntity<PedidoResponse> deleteOrderDetail(@PathVariable int orderid,@RequestBody PedidoDetalleRequest detalle){
        try{
            List<PedidoDetalle> updatedAfterDeletedOrderDetails = pedidoDetalleService.deleteOrderDetail(orderid,detalle.getIdproducto_detalles());
            Pedido orderUpdatedAfterDeleted = pedidoService.showOrder(orderid);
            Mesa orderTable = mesaService.getTableDetails(orderUpdatedAfterDeleted.getIdmesa());
            PedidoResponse pedResp = new PedidoResponse(
                    orderUpdatedAfterDeleted.getIdpedido(), orderUpdatedAfterDeleted.getFecha(),
                    orderUpdatedAfterDeleted.getMonto(), orderUpdatedAfterDeleted.getEstado(),
                    orderUpdatedAfterDeleted.getIdcliente(), orderUpdatedAfterDeleted.getIdmozo(),
                    orderUpdatedAfterDeleted.getIdcomprobante(), orderUpdatedAfterDeleted.getIdmesa(),
                    orderTable.getNumero(), orderTable.getEstado(),
                    updatedAfterDeletedOrderDetails
            );
            return new ResponseEntity<>(pedResp, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/orderlist/save")
    public ResponseEntity<Pedido> saveOrder(@RequestBody PedidoRequest pedido){
        sseController.sendNotificationCashier("Se ha registrado un nuevo pedido");
        sseController.sendNotificationAdmin("Se ha registrado un nuevo pedido");
        sseController.sendNotificationKitchen("Se ha registrado un nuevo pedido");
        try{
            Pedido ordersaved = pedidoService.saveOrder(pedido.getFecha_pedido(),pedido.getMonto_pedido(),pedido.getEstado_pedido(),pedido.getIdmozo_pedido(),pedido.getIdmesa_pedido());
            mesaService.changeTableState(pedido.getIdmesa_pedido());
            for(PedidoDetalleRequest dt:pedido.getDetalles_pedido()){
                pedidoDetalleService.saveOrderDetail(ordersaved.getIdpedido(),dt.getIdproducto_detalles(),dt.getCantidad_detalles());
            }
            return new ResponseEntity<>(ordersaved, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping(value = "/orderlist/order/{orderid}/bill")
    public ResponseEntity<Pedido> setBillOrder(@PathVariable int orderid,@RequestBody PedidoRequest pedido){
        try{
            Pedido orderbill = pedidoService.setOrderBill(orderid,pedido.getIdbill_pedido());
            return new ResponseEntity<>(orderbill, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/orderlist/order/{orderid}/client")
    public ResponseEntity<Pedido> setClientOrder(@PathVariable int orderid,@RequestBody PedidoRequest pedido){
        try{
            Pedido orderbill = pedidoService.setOrderClient(orderid,pedido.getIdcliente_pedido());
            return new ResponseEntity<>(orderbill, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/orderlist/order/{orderid}/state")
    public ResponseEntity<List<Pedido>> updateOrderState(@PathVariable int orderid,@RequestBody PedidoRequest pedido, @RequestParam String fecha){
        try{
            List<Pedido> orderlist = pedidoService.changeOrderStateList(orderid,pedido.getEstado_pedido(),"%"+fecha+"%");
            if(!pedido.getEstado_pedido().toLowerCase().contains("entregado")){
                sseController.sendNotificationOrder("Estado del pedido [ "+orderid+" ]: "+pedido.getEstado_pedido());
                sseController.sendNotificationCashier("Estado del pedido [ "+orderid+" ]: "+pedido.getEstado_pedido());
                sseController.sendNotificationAdmin("Estado del pedido [ "+orderid+" ]: "+pedido.getEstado_pedido());
            }
            return new ResponseEntity<>(orderlist, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/tables")
    public ResponseEntity<List<Mesa>> getTables(){
        try{
            List<Mesa> tables = mesaService.getTableList();
            return new ResponseEntity<>(tables, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/orderlist/table/{idtable}/restore-state")
    public ResponseEntity<List<Mesa>> restoreTableState(@PathVariable int idtable){
        try{
            List<Mesa> tableListRestore = mesaService.restoreTableState(idtable);
            return new ResponseEntity<>(tableListRestore,HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/orderlist/order/{orderid}/table/{tableid}/delete")
    public ResponseEntity<List<Pedido>> deleteOrder(@PathVariable int orderid,@PathVariable int tableid,@RequestParam String fecha){
        try{
            List<Pedido> listAfterDeleteOrder = pedidoService.deleteOrder(orderid,tableid,"%"+fecha+"%");
            sseController.sendNotificationOrder("El pedido [ "+orderid+" ]: Ha sido cancelado");
            sseController.sendNotificationAdmin("El pedido [ "+orderid+" ]: Ha sido cancelado");
            sseController.sendNotificationCashier("El pedido [ "+orderid+" ]: Ha sido cancelado");
            sseController.sendNotificationKitchen("El pedido [ "+orderid+" ]: Ha sido cancelado");
            return new ResponseEntity<>(listAfterDeleteOrder, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/table/restoretables")
    public ResponseEntity<List<Mesa>> restoreTables(){
        try{
            List<Mesa> tableListRestore = mesaService.restoreTables();
            return new ResponseEntity<>(tableListRestore,HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

package dev.jvall.TransaccionService.controller;

import dev.jvall.TransaccionService.domain.Transaccion;
import dev.jvall.TransaccionService.domain.service.TransaccionService;
import dev.jvall.TransaccionService.persistence.model.FiltroRequest;
import dev.jvall.TransaccionService.persistence.model.FiltroVentasRequest;
import dev.jvall.TransaccionService.persistence.model.TransaccionRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/transaction")
@RequiredArgsConstructor
public class TransaccionRestController {
    @Autowired
    TransaccionService transaccionService;
    @PostMapping("/lista-transacciones-order")
    public ResponseEntity<List<Transaccion>> getTransaccionListOrder(@RequestBody FiltroRequest filtro){
        return ResponseEntity.ok(transaccionService.getTransaccionList(filtro.getFecha()));
    }
    @PostMapping("/lista-transacciones-payments")
    public ResponseEntity<List<Transaccion>> getTransaccionListPayments(@RequestBody FiltroRequest filtro){
        return ResponseEntity.ok(transaccionService.getTransaccionPaymentsList(filtro.getFecha()));
    }
    @PostMapping("/lista-transacciones")
    public ResponseEntity<List<Transaccion>> getTransaccionesListPayments(@RequestBody FiltroRequest filtro){
        return ResponseEntity.ok(transaccionService.getTransaccionesList(filtro.getFecha()));
    }
    @PostMapping("/ventas-semanales")
    public ResponseEntity<List<Transaccion>> getVentasSemanales(@RequestBody FiltroVentasRequest filtro){
        return ResponseEntity.ok(transaccionService.getVentasSemanales(filtro.getFechaini(),filtro.getFechafin()));
    }
    @PostMapping("/save-transaccion-order")
    public ResponseEntity<Transaccion> saveTransaccionOrder(@RequestBody TransaccionRequest request){
        return ResponseEntity.ok(transaccionService.saveTransaccionOrder(
                request.getMonto(),request.getFecha(),request.getIdorigen(),request.getIdtipo(),request.getDescripcion()
        ));
    }
    @PostMapping("/save-transaccion-payment")
    public ResponseEntity<Transaccion> saveTransaccionPayment(@RequestBody TransaccionRequest request){
        return ResponseEntity.ok(transaccionService.saveTransaccionPayment(
                request.getMonto(),request.getFecha(),request.getIdtipo(),request.getDescripcion()
        ));
    }
}

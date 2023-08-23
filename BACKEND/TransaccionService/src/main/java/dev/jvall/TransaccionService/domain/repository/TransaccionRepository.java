package dev.jvall.TransaccionService.domain.repository;

import dev.jvall.TransaccionService.domain.Transaccion;

import java.util.List;

public interface TransaccionRepository {
    List<Transaccion> getTransaccionList(
            String fecha
    );
    List<Transaccion> getTransaccionPaymentsList(
            String fecha
    );
    List<Transaccion> getTransaccionesList(
            String fecha
    );
    List<Transaccion> getVentasSemanales(
            String fechaini,String fechafin
    );
    Transaccion saveTransaccionOrder(
            double monto,String fecha,
            int idorigen, int idtipo, String descripcion
    );
    Transaccion saveTransaccionPayment(
            double monto,String fecha,
            int idtipo, String descripcion
    );
}

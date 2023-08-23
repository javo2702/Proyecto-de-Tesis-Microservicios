package dev.jvall.TransaccionService.persistence;

import dev.jvall.TransaccionService.domain.Transaccion;
import dev.jvall.TransaccionService.domain.repository.TransaccionRepository;
import dev.jvall.TransaccionService.persistence.mapper.TransaccionMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TransaccionRepositoryImpl implements TransaccionRepository {
    @Autowired
    TransaccionMapper transaccionMapper;
    @Override
    public List<Transaccion> getTransaccionList(String fecha) {
        return transaccionMapper.getTransaccionListDate(fecha);
    }

    @Override
    public List<Transaccion> getTransaccionPaymentsList(String fecha) {
        return transaccionMapper.getTransaccionPaymentsListDate(fecha);
    }
    @Override
    public List<Transaccion> getTransaccionesList(String fecha) {
        return transaccionMapper.getTransaccionesListDate(fecha);
    }
    @Override
    public List<Transaccion> getVentasSemanales(String fechaini,String fechafin) {
        return transaccionMapper.getVentasSemanales(fechaini,fechafin);
    }
    @Override
    public Transaccion saveTransaccionOrder(double monto, String fecha, int idorigen, int idtipo,String descripcion) {
        return transaccionMapper.saveTransaccionOrder(monto,fecha,idorigen,idtipo,descripcion);
    }

    @Override
    public Transaccion saveTransaccionPayment(double monto, String fecha, int idtipo,String descripcion) {
        return transaccionMapper.saveTransaccionPayment(monto,fecha,idtipo,descripcion);
    }
}

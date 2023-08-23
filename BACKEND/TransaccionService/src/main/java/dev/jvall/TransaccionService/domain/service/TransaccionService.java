package dev.jvall.TransaccionService.domain.service;

import dev.jvall.TransaccionService.domain.Transaccion;
import dev.jvall.TransaccionService.domain.repository.TransaccionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransaccionService {
    @Autowired
    TransaccionRepository transaccionRepository;
    public List<Transaccion> getTransaccionList(String fecha){
        return transaccionRepository.getTransaccionList(fecha);
    }
    public List<Transaccion> getTransaccionPaymentsList(String fecha){
        return transaccionRepository.getTransaccionPaymentsList(fecha);
    }
    public List<Transaccion> getTransaccionesList(String fecha){
        return transaccionRepository.getTransaccionesList(fecha);
    }
    public List<Transaccion> getVentasSemanales(String fechaini,String fechafin){
        return transaccionRepository.getVentasSemanales(fechaini,fechafin);
    }
    public Transaccion saveTransaccionOrder(double monto, String fecha, int idorigen, int idtipo,String descripcion){
        return transaccionRepository.saveTransaccionOrder(
                monto,fecha,idorigen,idtipo,descripcion
        );
    }
    public Transaccion saveTransaccionPayment(double monto, String fecha, int idtipo,String descripcion){
        return transaccionRepository.saveTransaccionPayment(
                monto,fecha,idtipo,descripcion
        );
    }
}

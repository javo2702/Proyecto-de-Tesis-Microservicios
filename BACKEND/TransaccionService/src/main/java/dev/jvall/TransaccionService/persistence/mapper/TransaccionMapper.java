package dev.jvall.TransaccionService.persistence.mapper;

import dev.jvall.TransaccionService.domain.Transaccion;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface TransaccionMapper {
    @Select("call get_orders_date(" +
            "#{fechain,mode=IN,jdbcType=VARCHAR}" +
            ")")
    List<Transaccion> getTransaccionListDate(
        @Param("fechain") String fechain
    );
    @Select("call get_payments_date(" +
            "#{fechain,mode=IN,jdbcType=VARCHAR}" +
            ")")
    List<Transaccion> getTransaccionPaymentsListDate(
            @Param("fechain") String fechain
    );
    @Select("call get_transacciones_date(" +
            "#{fechain,mode=IN,jdbcType=VARCHAR}" +
            ")")
    List<Transaccion> getTransaccionesListDate(
            @Param("fechain") String fechain
    );
    @Select("call ventas_semanales(" +
            "#{fechaini,mode=IN,jdbcType=VARCHAR}," +
            "#{fechafin,mode=IN,jdbcType=VARCHAR}" +
            ")")
    List<Transaccion> getVentasSemanales(
            @Param("fechaini") String fechaini,
            @Param("fechafin") String fechafin
    );
    @Select("call saveTransaccionOrder(" +
            "#{montoin, mode=IN, jdbcType=DOUBLE}," +
            "#{fechain, mode=IN, jdbcType=VARCHAR}," +
            "#{idorigin, mode=IN, jdbcType=INTEGER}," +
            "#{idtipo, mode=IN, jdbcType=INTEGER}," +
            "#{descri, mode=IN, jdbcType=VARCHAR}" +
            ")")
    Transaccion saveTransaccionOrder(
            @Param("montoin") Double montoin,
            @Param("fechain") String fechain,
            @Param("idorigin") Integer idorigin,
            @Param("idtipo") Integer idtipo,
            @Param("descri") String descri
    );
    @Select("call register_payment(" +
            "#{montoin, mode=IN, jdbcType=DOUBLE}," +
            "#{fechain, mode=IN, jdbcType=VARCHAR}," +
            "#{idtipo, mode=IN, jdbcType=INTEGER}," +
            "#{descri, mode=IN, jdbcType=VARCHAR}" +
            ")")
    Transaccion saveTransaccionPayment(
            @Param("montoin") Double montoin,
            @Param("fechain") String fechain,
            @Param("idtipo") Integer idtipo,
            @Param("descri") String descri
    );
}

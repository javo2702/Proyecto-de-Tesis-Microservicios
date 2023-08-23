package dev.jvall.ValoracionService.persistence.mapper;

import dev.jvall.ValoracionService.domain.Valoracion;
import dev.jvall.ValoracionService.persistence.model.ValoracionRequest;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ValoracionMapper {
    @Select("call list_valoration(" +
            "#{fecha_,mode=IN,jdbcType=VARCHAR}" +
            ")")
    List<Valoracion> getValoracionList(
            @Param("fecha_") String fecha_
    );
    @Select("call save_valoration(" +
            "#{usuario,mode=IN,jdbcType=VARCHAR}," +
            "#{nombres,mode=IN,jdbcType=VARCHAR}," +
            "#{valoracion,mode=IN,jdbcType=INTEGER}," +
            "#{opinion,mode=IN,jdbcType=VARCHAR}," +
            "#{clasificacion,mode=IN,jdbcType=VARCHAR}," +
            "#{idpedidoin,mode=IN,jdbcType=INTEGER}" +
            ")")
    Valoracion saveValoracion(
            //@Param("fecha_") String fecha_
            ValoracionRequest valoracion
    );
}

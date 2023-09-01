package dev.jvall.UsuarioService.persistence.mapper;

import dev.jvall.UsuarioService.domain.Rol;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface RolMapper {
    @Select("call list_rols()")
    List<Rol> getRolList();
}

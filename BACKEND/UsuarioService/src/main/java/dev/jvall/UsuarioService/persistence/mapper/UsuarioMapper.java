package dev.jvall.UsuarioService.persistence.mapper;

import dev.jvall.UsuarioService.domain.Usuario;
import dev.jvall.UsuarioService.persistence.model.UsuarioRequest;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UsuarioMapper {
    @Select("call list_users()")
    List<Usuario> getUsersList();
    @Select("call create_user(" +
            "#{nombres_in, mode=IN, jdbcType=VARCHAR}," +
            "#{apellidos_in, mode=IN, jdbcType=VARCHAR}," +
            "#{usuario_in, mode=IN, jdbcType=VARCHAR}," +
            "#{password_in, mode=IN, jdbcType=VARCHAR}," +
            "#{dni_in, mode=IN, jdbcType=VARCHAR}," +
            "#{telefono_in, mode=IN, jdbcType=VARCHAR}," +
            "#{idrol_in, mode=IN, jdbcType=INTEGER}" +
            ")")
    Usuario createUser(UsuarioRequest usuario);
    @Select("call edit_user(" +
            "#{iduser_in, mode=IN, jdbcType=INTEGER},"+
            "#{nombres_in, mode=IN, jdbcType=VARCHAR}," +
            "#{apellidos_in, mode=IN, jdbcType=VARCHAR}," +
            "#{usuario_in, mode=IN, jdbcType=VARCHAR}," +
            "#{dni_in, mode=IN, jdbcType=VARCHAR}," +
            "#{telefono_in, mode=IN, jdbcType=VARCHAR}," +
            "#{idrol_in, mode=IN, jdbcType=INTEGER}" +
            ")")
    Usuario editUser(UsuarioRequest usuario);
    @Select("call show_user(" +
            "#{iduser, mode=IN, jdbcType=INTEGER}"+
            ")")
    Usuario showUser(@Param("iduser") Integer iduser);
    @Select("call unsubscribe_user(" +
            "#{user_id_in, mode=IN, jdbcType=INTEGER}"+
            ")")
    Usuario unsubscribeUser(@Param("user_id_in") Integer user_id_in);
}

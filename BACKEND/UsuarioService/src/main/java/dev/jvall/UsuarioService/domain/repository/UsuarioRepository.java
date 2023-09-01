package dev.jvall.UsuarioService.domain.repository;

import dev.jvall.UsuarioService.domain.Usuario;
import dev.jvall.UsuarioService.persistence.model.UsuarioRequest;

import java.util.List;

public interface UsuarioRepository {
    List<Usuario> getUserList();
    Usuario createUser(UsuarioRequest usuario);
    Usuario editUser(UsuarioRequest usuario, Integer id);
    Usuario showUser(Integer iduser);
    Usuario unsubscribeUser(Integer iduser);
}

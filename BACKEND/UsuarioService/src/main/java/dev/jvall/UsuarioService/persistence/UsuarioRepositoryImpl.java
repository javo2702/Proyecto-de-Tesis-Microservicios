package dev.jvall.UsuarioService.persistence;

import dev.jvall.UsuarioService.domain.Usuario;
import dev.jvall.UsuarioService.domain.repository.UsuarioRepository;
import dev.jvall.UsuarioService.persistence.mapper.UsuarioMapper;
import dev.jvall.UsuarioService.persistence.model.UsuarioRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UsuarioRepositoryImpl implements UsuarioRepository {
    @Autowired
    UsuarioMapper usuarioMapper;

    @Override
    public List<Usuario> getUserList() {
        return usuarioMapper.getUsersList();
    }

    @Override
    public Usuario createUser(UsuarioRequest usuario) {
        return usuarioMapper.createUser(usuario);
    }

    @Override
    public Usuario editUser(UsuarioRequest usuario, Integer id) {
        usuario.setIduser_in(id);
        return usuarioMapper.editUser(usuario);
    }

    @Override
    public Usuario showUser(Integer iduser) {
        return usuarioMapper.showUser(iduser);
    }

    @Override
    public Usuario unsubscribeUser(Integer iduser) {
        return usuarioMapper.unsubscribeUser(iduser);
    }
}

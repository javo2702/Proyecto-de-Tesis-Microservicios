package dev.jvall.UsuarioService.domain.service;

import dev.jvall.UsuarioService.domain.Usuario;
import dev.jvall.UsuarioService.domain.repository.UsuarioRepository;
import dev.jvall.UsuarioService.persistence.model.UsuarioRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    UsuarioRepository usuarioRepository;
    public List<Usuario> getUsersList(){
        return usuarioRepository.getUserList();
    }
    public Usuario createUser(UsuarioRequest usuario){
        return usuarioRepository.createUser(usuario);
    }
    public Usuario editUser(UsuarioRequest usuario, Integer id){
        return usuarioRepository.editUser(usuario, id);
    }
    public Usuario showUser(Integer id){
        return usuarioRepository.showUser(id);
    }
    public Usuario unsubscribeUser(Integer id){
        return usuarioRepository.unsubscribeUser(id);
    }
}

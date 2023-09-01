package dev.jvall.UsuarioService.domain.service;

import dev.jvall.UsuarioService.domain.Rol;
import dev.jvall.UsuarioService.domain.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RolService {
    @Autowired
    RolRepository rolRepository;
    public List<Rol> getRolList(){
        return rolRepository.getRolList();
    }
}

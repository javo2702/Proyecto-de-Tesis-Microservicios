package dev.jvall.UsuarioService.persistence;

import dev.jvall.UsuarioService.domain.Rol;
import dev.jvall.UsuarioService.domain.repository.RolRepository;
import dev.jvall.UsuarioService.persistence.mapper.RolMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class RolRepositoryImpl implements RolRepository {
    @Autowired
    RolMapper rolMapper;
    @Override
    public List<Rol> getRolList() {
        return rolMapper.getRolList();
    }
}

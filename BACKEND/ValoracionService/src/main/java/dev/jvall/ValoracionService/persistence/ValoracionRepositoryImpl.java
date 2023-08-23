package dev.jvall.ValoracionService.persistence;

import dev.jvall.ValoracionService.domain.Valoracion;
import dev.jvall.ValoracionService.domain.repository.ValoracionRepository;
import dev.jvall.ValoracionService.persistence.mapper.ValoracionMapper;
import dev.jvall.ValoracionService.persistence.model.ValoracionRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ValoracionRepositoryImpl implements ValoracionRepository {
    @Autowired
    ValoracionMapper valoracionMapper;
    @Override
    public List<Valoracion> getValoracionLista(String fecha) {
        return valoracionMapper.getValoracionList(fecha);
    }

    @Override
    public Valoracion saveValoracion(ValoracionRequest valoracion) {
        return valoracionMapper.saveValoracion(valoracion);
    }
}

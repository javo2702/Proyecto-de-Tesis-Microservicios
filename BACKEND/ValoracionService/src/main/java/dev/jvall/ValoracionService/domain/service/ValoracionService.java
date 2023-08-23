package dev.jvall.ValoracionService.domain.service;

import dev.jvall.ValoracionService.domain.Valoracion;
import dev.jvall.ValoracionService.domain.repository.ValoracionRepository;
import dev.jvall.ValoracionService.persistence.model.ValoracionRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ValoracionService {
    @Autowired
    ValoracionRepository valoracionRepository;
    public List<Valoracion> getValoracionList(String fecha){
        return valoracionRepository.getValoracionLista(fecha);
    }
    public Valoracion saveValoracion(ValoracionRequest valoracion){
        return valoracionRepository.saveValoracion(valoracion);
    }
}

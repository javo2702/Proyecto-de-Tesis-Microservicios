package dev.jvall.ValoracionService.domain.repository;

import dev.jvall.ValoracionService.domain.Valoracion;
import dev.jvall.ValoracionService.persistence.model.ValoracionRequest;

import java.util.List;

public interface ValoracionRepository {
    List<Valoracion> getValoracionLista(String fecha);
    Valoracion saveValoracion(ValoracionRequest valoracion);
}

package dev.jvall.InventarioService.service;

import dev.jvall.InventarioService.model.Categoria;
import dev.jvall.InventarioService.model.Producto;
import dev.jvall.InventarioService.repository.CategoriaRepository;
import dev.jvall.InventarioService.repository.ProductoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j //borrar depues
public class CategoriaService {
    private final CategoriaRepository categoriaRepository;
    public List<Categoria> getCategoryList(){
        log.info("Getting category list from db");
        return categoriaRepository.getCategoryList();
    }
}

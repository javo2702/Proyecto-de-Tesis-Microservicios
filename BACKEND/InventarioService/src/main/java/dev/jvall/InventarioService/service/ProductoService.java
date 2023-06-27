package dev.jvall.InventarioService.service;

import dev.jvall.InventarioService.model.Producto;
import dev.jvall.InventarioService.repository.ProductoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j //borrar depues
public class ProductoService {
    private final ProductoRepository productoRepository;
    public List<Producto> getFoodList(){
        log.info("Getting food list from db");
        return productoRepository.getFoodList();
    }

    public List<Producto> getDrinkList(){
        log.info("Getting drink list from db");
        return productoRepository.getDrinkList();
    }
}

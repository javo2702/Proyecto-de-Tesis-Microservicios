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
    public List<Producto> getProductsList(){
        return productoRepository.getProductsList();
    }
    public List<Producto> getFoodList(){
        return productoRepository.getFoodList();
    }
    public List<Producto> getDrinkList(){
        return productoRepository.getDrinkList();
    }
    public Producto getProductById(int idproduct){
        return productoRepository.getProductById(idproduct);
    }
}

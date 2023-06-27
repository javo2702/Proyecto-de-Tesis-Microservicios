package dev.jvall.InventarioService.repository;

import dev.jvall.InventarioService.model.Categoria;
import dev.jvall.InventarioService.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoriaRepository extends JpaRepository<Categoria,Integer> {
    @Query(value="{call list_categories()};", nativeQuery=true)
    List<Categoria> getCategoryList();
}

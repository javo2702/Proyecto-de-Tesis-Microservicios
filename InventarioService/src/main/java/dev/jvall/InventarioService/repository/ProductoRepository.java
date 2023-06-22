package dev.jvall.InventarioService.repository;

import dev.jvall.InventarioService.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto,Integer> {
    @Query(value="{call list_food()};", nativeQuery=true)
    List<Producto> getFoodList();

    @Query(value="{call list_drink()};", nativeQuery=true)
    List<Producto> getDrinkList();
}

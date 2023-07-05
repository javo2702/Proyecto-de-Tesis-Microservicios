package dev.jvall.InventarioService.repository;

import dev.jvall.InventarioService.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto,Integer> {
    @Query(value="{call list_products()};", nativeQuery=true)
    List<Producto> getProductsList();
    @Query(value="{call list_food()};", nativeQuery=true)
    List<Producto> getFoodList();
    @Query(value="{call list_drink()};", nativeQuery=true)
    List<Producto> getDrinkList();
    @Query(value="{call show_product(:id_product)};", nativeQuery=true)
    Producto getProductById(@Param("id_product")int id_product);
}

package dev.jvall.InventarioService.repository;

import dev.jvall.InventarioService.model.Categoria;
import dev.jvall.InventarioService.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CategoriaRepository extends JpaRepository<Categoria,Integer> {
    @Query(value="{call list_categories()};", nativeQuery=true)
    List<Categoria> getCategoryList();

    @Query(value="{call state_category_false(:id_category)};", nativeQuery=true)
    Categoria stateCategoryFalse(@Param("id_category")int id_category);
}

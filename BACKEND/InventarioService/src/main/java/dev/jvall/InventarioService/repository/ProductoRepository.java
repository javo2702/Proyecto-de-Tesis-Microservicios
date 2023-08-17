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
    @Query(value="{call create_product(" +
            ":nombre," +
            ":descripcion," +
            ":precio," +
            ":estado," +
            ":descuento," +
            ":idcategoria," +
            ":imagen" + ")};", nativeQuery=true)
    Producto createProduct(
            @Param("nombre")String nombre,
            @Param("descripcion")String descripcion,
            @Param("precio")double precio,
            @Param("estado")String estado,
            @Param("descuento")double descuento,
            @Param("idcategoria")int idcategoria,
            @Param("imagen")String imagen
    );
    @Query(value="{call edit_product(" +
            ":idproducto,"+
            ":nombre," +
            ":descripcion," +
            ":precio," +
            ":estado," +
            ":descuento," +
            ":idcategoria," +
            ":imagen" + ")};", nativeQuery=true)
    Producto editProduct(
            @Param("idproducto")int idproducto,
            @Param("nombre")String nombre,
            @Param("descripcion")String descripcion,
            @Param("precio")double precio,
            @Param("estado")String estado,
            @Param("descuento")double descuento,
            @Param("idcategoria")int idcategoria,
            @Param("imagen")String imagen
    );
    @Query(value="{call unsubscribe_product(" +
            ":idproducto"+ ")};", nativeQuery=true)
    Producto unsubscribeProduct(
            @Param("idproducto")int idproducto
    );
}

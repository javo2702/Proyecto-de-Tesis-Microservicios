package dev.jvall.InventarioService.controller;

import dev.jvall.InventarioService.dto.CategoryRequest;
import dev.jvall.InventarioService.dto.ProductoRequest;
import dev.jvall.InventarioService.model.Categoria;
import dev.jvall.InventarioService.model.Producto;
import dev.jvall.InventarioService.service.CategoriaService;
import dev.jvall.InventarioService.service.ProductoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

import lombok.extern.slf4j.Slf4j;
@RestController
@RequestMapping("/inventary")
@RequiredArgsConstructor
@Slf4j //borrar depues
public class InventarioRestController {
    @Value( "${server.port}" )
    private String port ;
    private final ProductoService productoService;
    private final CategoriaService categoriaService;
    @GetMapping( "/server/info" )
    public ResponseEntity<String> showOrderInfo() {
        return ResponseEntity.ok( "DESDE EL SERVICIO DE INVENTARIO, el número de puerto es: " + port );
    }
    @GetMapping("/products")
    public ResponseEntity<List<Producto>> getProductsList(){
        try{
            List<Producto> foodlist = productoService.getProductsList();
            return new ResponseEntity<>(foodlist,HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/foodlist")
    public ResponseEntity<List<Producto>> getListFood(){
        try{
            List<Producto> foodlist = productoService.getFoodList();
            return new ResponseEntity<>(foodlist,HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/foodlist/show/{productid}")
    public ResponseEntity<Producto> getProduct(@PathVariable int productid){
        try{
            Producto product = productoService.getProductById(productid);
            return new ResponseEntity<>(product,HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/drinklist")
    public ResponseEntity<List<Producto>> getListDrink(){
        try{
            List<Producto> foodlist = productoService.getDrinkList();
            return new ResponseEntity<>(foodlist,HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/categories")
    public ResponseEntity<List<Categoria>> getListCategory(){
        try{
            List<Categoria> categoryList = categoriaService.getCategoryList();
            return new ResponseEntity<>(categoryList,HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/productos/create")
    public ResponseEntity<Producto> createProduct(@RequestBody ProductoRequest producto){
        try{
            Producto nuevoProducto = productoService.createProducto(producto);
            return new ResponseEntity<>(nuevoProducto,HttpStatus.OK);
        } catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/productos/edit/{id}")
    public ResponseEntity<Producto> editProduct(@PathVariable int id,@RequestBody ProductoRequest producto){
        try{
            Producto productoEditado = productoService.editProducto(id,producto);
            return new ResponseEntity<>(productoEditado,HttpStatus.OK);
        } catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/productos/unsubcribe/{id}")
    public ResponseEntity<Producto> unsubscribeProduct(@PathVariable int id){
        try{
            Producto productoDeBaja = productoService.unsubscribeProduct(id);
            return new ResponseEntity<>(productoDeBaja,HttpStatus.OK);
        } catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //----
    @PostMapping("/categories/create")
    public ResponseEntity<Categoria> createCategory(@RequestBody Categoria categoria){
        try{
            Categoria nuevaCategoria = categoriaService.createCategory(categoria);
            return new ResponseEntity<>(nuevaCategoria,HttpStatus.OK);
        } catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/categories/edit/{id}")
    public ResponseEntity<Categoria> editCategory(@PathVariable int id,@RequestBody Categoria categoria){
        try{
            Categoria categoriaEditada = categoriaService.editCategory(id,categoria);
            return new ResponseEntity<>(categoriaEditada,HttpStatus.OK);
        } catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/categories/unsubcribe/{id}")
    public ResponseEntity<Categoria> unsubscribeCategory(@PathVariable int id){
        try{
            Categoria categoriaDeBaja = categoriaService.unsubscribreCategory(id);
            return new ResponseEntity<>(categoriaDeBaja,HttpStatus.OK);
        } catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

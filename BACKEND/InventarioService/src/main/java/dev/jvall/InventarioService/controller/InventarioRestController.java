package dev.jvall.InventarioService.controller;

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
}

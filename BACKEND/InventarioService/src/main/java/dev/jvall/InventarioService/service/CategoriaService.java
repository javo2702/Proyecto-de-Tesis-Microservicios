package dev.jvall.InventarioService.service;

import dev.jvall.InventarioService.model.Categoria;
import dev.jvall.InventarioService.model.Producto;
import dev.jvall.InventarioService.repository.CategoriaRepository;
import dev.jvall.InventarioService.repository.ProductoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j //borrar depues
public class CategoriaService {
    private final CategoriaRepository categoriaRepository;
    public List<Categoria> getCategoryList(){
        return categoriaRepository.getCategoryList();
    }

    public Categoria createCategory(Categoria cat){
        return categoriaRepository.save(cat);
    }
    public Categoria editCategory(int id,Categoria cat) throws Exception{
        Optional<Categoria> op;
        try{
            op = categoriaRepository.findById(id);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
        if(!op.isPresent()){
            throw new Exception("No la categoria con el id "+id);
        } else{
            try {
                return categoriaRepository.save(cat);
            }
            catch (Exception e){
                throw new Exception(e.getMessage());
            }
        }
    }
    public Categoria unsubscribreCategory(int id){
        return categoriaRepository.stateCategoryFalse(id);
    }
}

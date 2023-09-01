package dev.jvall.UsuarioService.controller;

import dev.jvall.UsuarioService.domain.Rol;
import dev.jvall.UsuarioService.domain.Usuario;
import dev.jvall.UsuarioService.domain.service.RolService;
import dev.jvall.UsuarioService.domain.service.UsuarioService;
import dev.jvall.UsuarioService.persistence.model.UsuarioRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UsuarioRestController {
    @Autowired
    UsuarioService usuarioService;
    @Autowired
    RolService rolService;
    @GetMapping("/lista-roles")
    public ResponseEntity<List<Rol>> getRolList(){
        return ResponseEntity.ok(rolService.getRolList());
    }
    @GetMapping("/lista-usuarios")
    public ResponseEntity<List<Usuario>> getUsersList(){
        return ResponseEntity.ok(usuarioService.getUsersList());
    }
    @GetMapping("/lista-usuarios/detalles-usuario/{iduser}")
    public ResponseEntity<Usuario> showUser(@PathVariable("iduser")Integer iduser){
        return ResponseEntity.ok(usuarioService.showUser(iduser));
    }
    @PostMapping("/lista-usuarios/crear-usuario")
    public ResponseEntity<Usuario> createUser(@RequestBody UsuarioRequest usuario){
        return ResponseEntity.ok(usuarioService.createUser(usuario));
    }
    @PutMapping("/lista-usuarios/editar-usuario/{iduser}")
    public ResponseEntity<Usuario> editUser(@RequestBody UsuarioRequest usuario, @PathVariable("iduser")Integer iduser){
        return ResponseEntity.ok(usuarioService.editUser(usuario,iduser));
    }
    @PutMapping("/lista-usuarios/dar-de-baja-usuario/{iduser}")
    public ResponseEntity<Usuario> unsubscribeUser(@PathVariable("iduser")Integer iduser){
        return ResponseEntity.ok(usuarioService.unsubscribeUser(iduser));
    }
}

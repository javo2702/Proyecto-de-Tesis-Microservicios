package dev.jvall.ValoracionService.controller;

import dev.jvall.ValoracionService.domain.Valoracion;
import dev.jvall.ValoracionService.domain.service.ValoracionService;
import dev.jvall.ValoracionService.persistence.model.FiltroRequest;
import dev.jvall.ValoracionService.persistence.model.ValoracionRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/valoration")
@RequiredArgsConstructor
public class ValoracionRestController {
    @Autowired
    ValoracionService valoracionService;
    @PostMapping("/lista-valoracion")
    public ResponseEntity<List<Valoracion>> getTransaccionListOrder(@RequestBody FiltroRequest filtro){
        return ResponseEntity.ok(valoracionService.getValoracionList(filtro.getFecha()));
    }
    @PostMapping("/save-valoracion")
    public ResponseEntity<Valoracion> saveValoracion(@RequestBody ValoracionRequest valoracion){
        return ResponseEntity.ok(valoracionService.saveValoracion(valoracion));
    }
}

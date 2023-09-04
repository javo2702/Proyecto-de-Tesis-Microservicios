package dev.jvall.ValoracionService.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import reactor.util.annotation.Nullable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Valoracion {
    private Integer idvaloracion;
    private String usuario;
    private String nombres;
    private Integer valoracion;
    private String opinion;
    private String fecha;
    @Nullable
    private String clasificacion;
    private Integer idpedido;
}

package dev.jvall.ValoracionService.persistence.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ValoracionRequest {
    private String usuario;
    private String nombres;
    private Integer valoracion;
    private String opinion;
    private String clasificacion;
    private Integer idpedidoin;

}
